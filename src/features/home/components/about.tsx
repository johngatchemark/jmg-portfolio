function About() {
  return (
    <article
      id="about"
      className="flex flex-col w-screen justify-between items-center"
    >
      <div className="w-[80%] h-px bg-gray-200 dark:bg-gray-900 mt-4 mb-5" />
      <div className="flex flex-col align-center max-w-120 lg:flex-row py-10 xs:py-20 gap-10 md:gap-15 lg:gap-0 justify-between xs:mx-10 lg:mx-20 lg:max-w-5xl xl:w-auto ">
        <section className="flex flex-col flex-1 justify-center mx-10 xs:mx-auto">
          <h1 className="text-left text-jm-fg h1-stretched mt-0!">About</h1>
          <p className="text-left text-jm-fg lg:max-w-90 xl:max-w-105">
            I'm a recent graduate of computer science at UE-Manila with a strong
            interest in software engineering and building beautiful, functional
            user-focused applications. I have
          </p>
        </section>
        <div className="flex flex-1 justify-center">
          <img
            src="my-grad-pic.jpg"
            className="rounded-none xs:rounded-3xl object-cover w-120 h-120 lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </article>
  );
}

export default About;
