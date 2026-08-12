import { createFileRoute } from "@tanstack/react-router";
import Contact from "../features/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Me",
      },
    ],
  }),
  component: Contact,
});
