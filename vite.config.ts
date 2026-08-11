import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

function apiDevPlugin() {
  return {
    name: "api-dev-plugin",
    configureServer(server: any) {
      server.middlewares.use("/api/contact", async (req: any, res: any) => {
        if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk: any) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              req.body = body ? JSON.parse(body) : {};
              const { default: handler } = await import("./api/contact.ts");
              const resAdapter = {
                statusCode: 200,
                status(code: number) {
                  this.statusCode = code;
                  res.statusCode = code;
                  return this;
                },
                setHeader(key: string, val: string) {
                  res.setHeader(key, val);
                  return this;
                },
                json(data: any) {
                  res.statusCode = this.statusCode;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(data));
                  return this;
                },
                end() {
                  res.statusCode = this.statusCode;
                  res.end();
                  return this;
                },
              };
              await handler(req, resAdapter);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: err?.message || "Internal Server Error" }));
            }
          });
        } else if (req.method === "OPTIONS") {
          res.statusCode = 200;
          res.end();
        } else {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed. Use POST." }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env / .env.local into process.env for server middleware
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
    plugins: [tanstackRouter(), react(), tailwindcss(), apiDevPlugin()],
    server: {
      allowedHosts: ["nontravelling-fabled-tari.ngrok-free.dev"],
    },
  };
});
