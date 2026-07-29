import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { StrictMode } from "react";
import "./index.css";
import { HeaderProvider } from "./context/header-context";
import { ThemeProvider } from "./context/theme-context";

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HeaderProvider>
        <RouterProvider router={router} />
      </HeaderProvider>
    </ThemeProvider>
  </StrictMode>,
);
