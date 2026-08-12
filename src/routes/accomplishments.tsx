import { createFileRoute } from "@tanstack/react-router";
import Accomplishments from "../features/accomplishments";

export const Route = createFileRoute("/accomplishments")({
  head: () => ({
    meta: [
      {
        title: "Accomplishments",
      },
    ],
  }),
  component: Accomplishments,
});
