import Education from "./education";
import Experience from "./experience";
import Leadership from "./leadership";
import TechnicalStack from "./tech-stack";
import Container from "../../../components/container";

function MainContent() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between align-center gap-10 md:gap-15 max-w-120 lg:max-w-6xl lg:w-full mx-5 lg:mx-0 lg:px-20">
        <div className="flex flex-col gap-8 flex-1">
          <Education />
          <Experience />
          <Leadership />
        </div>

        <div className="flex flex-col gap-8 flex-1">
          <TechnicalStack />
        </div>
      </div>
    </Container>
  );
}

export default MainContent;
