import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import TechnicalStack from "./components/tech-stack";
import Container from "../../components/container";
import FeaturedProjects from "./components/featured-projects";

function MainPage() {
  return (
    <main className="w-screen">
      <Hero />
      <div className="m-0! w-[80%] h-px bg-gray-200 dark:bg-gray-900 mt-4 mb-5" />
      <div className="py-5" />
      <About />
      <div className="py-5" />
      <Container>
        <div className="flex flex-col align-center max-w-120 lg:flex-row gap-10 md:gap-15 justify-between mx-10 lg:mx-20 lg:max-w-5xl xl:w-auto ">
          <div className="flex flex-col gap-8 flex-1">
            <Education />
            <Experience />
          </div>

          <div className="flex flex-col gap-8 flex-1">
            <TechnicalStack />
          </div>
        </div>
      </Container>
      <div className="py-5" />
      <div className="m-0! w-[80%] h-px bg-gray-200 dark:bg-gray-900 mt-4 mb-5" />
      <div className="py-5" />
      <FeaturedProjects />
      <div className="py-5" />
      <div className="m-0! w-[80%] h-px bg-gray-200 dark:bg-gray-900 mt-4 mb-5" />
      <div className="py-5" />
    </main>
  );
}

export default MainPage;
