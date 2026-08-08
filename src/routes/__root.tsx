import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import Header from "../components/header/header";
import Footer from "../components/footer";
import Container from "../components/container";
import RaisedButton from "../components/raised-button";
import { useHeader } from "../context/header-context";
import { Home, ArrowLeft } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  const { headerHeight } = useHeader();
  const paddingTop = headerHeight ? `${headerHeight}px` : "0px";

  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-jm-bg text-jm-fg w-full">
      <Header />
      <div className="flex-1 w-full" style={{ paddingTop }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row justify-between align-center gap-4 md:gap-15 max-w-120 lg:max-w-6xl lg:w-full mx-10 lg:mx-0 lg:px-20 py-12">
        {/* Left Column: Text & Actions */}
        <div className="flex flex-col gap-6 flex-1 text-left w-full lg:w-1/2">
          <p className="text-left text-[12px]! font-mono text-jm-accent tracking-widest">
            &gt; 404_NOT_FOUND
          </p>

          <h1 className="h1-stretched text-jm-fg text-left my-0!">
            Mmm... I don't remember creating a page for that 🤔
          </h1>

          <p className="text-jm-muted-fg font-sans text-base leading-relaxed">
            The link you followed might be broken, or the page may have been
            moved, deleted, or is still under construction.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link to="/" className="no-underline">
              <RaisedButton
                color="bg"
                borderColor="primary"
                textColor="primary"
                darkTextColor="primary"
                dropShadowColor="primary"
                hoverColor="#e2f4eb"
                darkHoverColor="#12251c"
                hoverTextColor="primary"
                darkHoverTextColor="primary"
              >
                <Home size={14} />
                <span>Return to Home</span>
              </RaisedButton>
            </Link>

            <Link to="/projects" className="no-underline">
              <RaisedButton
                color="bg"
                borderColor="fg"
                darkBorderColor="ui"
                textColor="fg"
                dropShadowColor="fg"
                hoverColor="#e4e4dd"
                darkHoverColor="#1e1f29"
              >
                <ArrowLeft size={14} />
                <span>View Projects</span>
              </RaisedButton>
            </Link>
          </div>
        </div>

        {/* Right Column: Static Graphic */}
        <div className="flex flex-1 justify-center items-center w-full lg:w-1/2">
          <img
            src="/wilted-rose.png"
            alt="Page Not Found Pixel Art"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 [image-rendering:pixelated] object-contain select-none"
          />
        </div>
      </div>
    </Container>
  );
}
