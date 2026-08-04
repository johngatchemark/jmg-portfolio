import Hero from "./components/hero";
import About from "./components/about";
import MainContent from "./components/main-content";
import FeaturedProjects from "./components/featured-projects";

function MainPage() {
  return (
    <main className="w-screen flex flex-col items-center">
      <Hero />
      <div className="mx-auto w-[80%] h-px bg-gray-200 dark:bg-gray-900 mt-4 mb-5" />
      <div className="py-5" />
      <About />
      <div className="py-5" />
      <MainContent />
      <div className="py-5" />
      <div className="mx-auto w-[80%] h-px bg-gray-200 dark:bg-gray-900 mt-4 mb-5" />
      <div className="py-5" />
      <FeaturedProjects />
      <div className="py-5" />
      <div className="mx-auto w-[80%] h-px bg-gray-200 dark:bg-gray-900 mt-4 mb-5" />
      <div className="py-5" />
    </main>
  );
}

export default MainPage;
