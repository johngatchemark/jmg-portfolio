import Container from "../../components/container";
import RaisedButton from "../../components/raised-button";
import { Link } from "@tanstack/react-router";
import { Home, ArrowLeft } from "lucide-react";

function Arcade() {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row justify-between align-center gap-4 md:gap-15 max-w-120 lg:max-w-6xl lg:w-full mx-5 lg:mx-0 lg:px-20 py-12">
        {/* Left Column: Text & Actions */}
        <div className="flex flex-col gap-6 flex-1 text-left w-full lg:w-1/2">
          <p className="text-left text-[12px]! font-mono text-jm-accent tracking-widest">
            &gt; sys.arcade()
          </p>

          <h1 className="h1-stretched text-jm-fg text-left my-0!">Arcade</h1>

          <p className="text-jm-muted-fg font-sans text-base leading-relaxed">
            This room is currently under construction. Pixel builders are
            assembling interactive 8-bit canvas games, WebGL visualizers, and AI
            playgrounds behind the scenes.
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
            src="/construction.png"
            alt="Under Construction Pixel Art"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 [image-rendering:pixelated] object-contain select-none"
          />
        </div>
      </div>
    </Container>
  );
}

export default Arcade;
