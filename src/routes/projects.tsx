import { createFileRoute } from "@tanstack/react-router";
import Projects from "../features/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Projects",
      },
    ],
  }),
  component: Projects,
});
