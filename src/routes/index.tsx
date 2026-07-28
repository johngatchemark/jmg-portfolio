// Not to be confused with index.css !
import { createFileRoute } from "@tanstack/react-router";
import MainPage from "../features/home";

export const Route = createFileRoute('/')({
  component: MainPage,
});