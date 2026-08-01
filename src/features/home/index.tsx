import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import TechnicalStack from "./components/tech-stack";

function MainPage() {
  return (
    <main className="w-screen">
      <Hero />
      <About />
      <article
        id="about"
        className="flex flex-col w-screen justify-between items-center"
      >
        <div className="flex flex-col align-center max-w-120 lg:flex-row py-5 gap-10 md:gap-15 justify-between mx-10 lg:mx-20 lg:max-w-5xl xl:w-auto ">
          <div className="flex flex-col gap-8 flex-1">
            <Education />
            <Experience />
          </div>

          <div className="flex flex-col gap-8 flex-1">
            <TechnicalStack />
          </div>
        </div>
      </article>
    </main>
  );
}

export default MainPage;
