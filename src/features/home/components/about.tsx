import Container from "../../../components/container";

function About() {
  return (
    <Container>
      <div className="flex flex-col align-center max-w-120 lg:flex-row gap-10 md:gap-15 justify-between xs:mx-10 lg:mx-20 lg:max-w-5xl xl:w-auto ">
        <section className="flex flex-col flex-1 justify-center mx-10 xs:mx-auto gap-4">
          <p className="text-left text-[12px]! text-sm font-mono text-jm-green tracking-widest">
            &gt; sys.about()
          </p>
          <h2 className="text-left text-jm-fg h1-stretched m-0!">
            Building things that matter.
          </h2>
          {/* <p className="text-left text-jm-fg lg:max-w-90 xl:max-w-105"> */}

          <p className="text-left text-jm-muted-fg">
            I'm a recent Computer Science graduate from the University of the
            East batch 2026. As an aspiring software developer, I enjoy creating
            full-stack web applications (with a focus on front-end), Android app
            development, and building AI/ML models—traditional and deep learning
            alike.
          </p>
          <p className="text-left text-jm-muted-fg">
            During college, I led the development of our capstone thesis project
            Scaffl.ed, which I also co-authored into a published peer-reviewed
            paper presented at an international conference in Tokyo. Beyond
            coursework, our team of three took 1st place (out of 25 teams) in
            Ateneo de Manila's annual overnight hackathon, Blue Hacks 2026.
          </p>
          <p className="text-left text-jm-muted-fg">
            I like exploring the magic in computers, and standing at the
            intersection of art and logic is right where I want to be.
          </p>
        </section>
        <div className="flex flex-1 justify-center items-center">
          <img
            src="my-grad-pic.jpg"
            className="rounded-none xs:rounded-3xl object-cover w-120 h-fit lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </Container>
  );
}

export default About;
