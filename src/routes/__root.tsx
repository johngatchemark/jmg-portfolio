import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/header/header";
import { useHeader } from "../context/header-context";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  const { headerHeight } = useHeader();
  const paddingTop = headerHeight ? `${headerHeight}px` : "0px";

  return (
    <div className="flex flex-col items-center bg-jm-bg">
      <Header />
      <div style={{ paddingTop }}>
        <Outlet />
      </div>
    </div>
  );
}

function NotFound() {
  const { headerHeight } = useHeader();
  const paddingTop = headerHeight ? `${headerHeight}px` : "0px";

  return (
    <div
      style={{ height: `calc(100vh - ${paddingTop})` }}
      className="flex items-center max-w-4xl justify-center"
    >
      <div className="max-w-200 flex justify-center">
        <h1 className="text-left h1-stretched m-0!">
          Mmm... I don't remember creating a page for that 🤔
        </h1>
      </div>
    </div>
  );
}
