import Education from "./education";
import Experience from "./experience";
import Leadership from "./leadership";
import TechnicalStack from "./tech-stack";
import Container from "../../../components/container";

function MainContent() {
  return (
    <Container>
      <div className="flex flex-col align-center max-w-120 lg:flex-row gap-10 md:gap-15 justify-between mx-10 lg:mx-20 lg:max-w-5xl xl:w-auto">
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
