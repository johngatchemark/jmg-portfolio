import Badge from "../../../components/badge";
import Container from "../../../components/container";
import FakeMacWindow from "../../../components/fake-mac-window";
import RaisedButton from "../../../components/raised-button";

interface FeaturedProjectItem {
  fakeFilePath: string;
  title: string;
  role: string;
  subtitle: string;
  description: string;
  techStack: string[];
  awards?: string[];
  additionalInfo?: string;
}

const featuredProjects: FeaturedProjectItem[] = [
  {
    fakeFilePath: "~/projects/lakadph",
    title: "LakadPH",
    role: "Frontend Developer",
    subtitle: "Pedestrian-First Smart Navigation Web App",
    description:
      "Responsive frontend integrating OpenStreetMap for routing, ShadeMap API for sun coverage analysis, and Overpass API for streetlight data. Designed for pedestrian safety in Metro Manila.",
    techStack: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "OpenStreetMap",
      "ShadeMap API",
      "Overpass API",
    ],
    awards: [
      "Champion (1st Place) — Blue Hacks 2026 @ Ateneo de Manila University",
    ],
  },
  {
    fakeFilePath: "~/projects/scaffl-ed",
    title: "Scaffl.ed",
    role: "Project Team Leader",
    subtitle: "LLM-Driven Java Debugging Tutor via Gaze & Mouse Tracking",
    description:
      "Led a five-member team building an intelligent tutoring system. Curated gaze/mouse interaction datasets, trained a Random Forest confusion-detection model, and managed full research execution. Presented at AAIML 2026 in Tokyo.",
    techStack: [
      "TypeScript",
      "React.js",
      "Next.js",
      "PostgreSQL",
      "FastAPI",
      "scikit-learn",
    ],
    awards: [
      "Outstanding Oral Presentation — AAIML 2026, Tokyo · IEEE Xplore & Scopus",
    ],
    additionalInfo: "DOI: 10.1109/AAIML67890.2026.11498122",
  },
  {
    fakeFilePath: "~/projects/studdy",
    title: "Studdy",
    role: "Lead Android Developer",
    subtitle: "Study Partner Matching Application",
    description:
      "Architected an Android study-matching app with MVVM, Jetpack Compose UI, and Retrofit-based ASP.NET backend integration. Built custom Material 3 components using low-level Compose drawing APIs.",
    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Material 3"],
    awards: ["2nd Runner-Up — 2024 Philippine Startup Challenge, NCR Regional"],
  },
];

function FeaturedProjects() {
  return (
    <Container>
      <div
        className="
          flex flex-col
          xl:w-auto
          max-w-120 lg:max-w-5xl
          mx-10 lg:mx-20
          gap-4
          align-center
        "
      >
        <p className="text-left text-[12px]! text-sm font-mono text-jm-green tracking-widest">
          &gt; sys.previewprojects()
        </p>
        <div className="flex justify-between items-center">
          <h2 className="text-left text-jm-fg h1-stretched m-0!">
            Featured projects.
          </h2>
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
            <span className="font-mono text-[12px]! text-sm font-medium">
              Explore All Projects &rarr;
            </span>
          </RaisedButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:flex xl:justify-evenly w-full gap-6">
          {featuredProjects.map(
            (project: FeaturedProjectItem, index: number) => (
              <FakeMacWindow
                className="flex-1"
                key={index}
                displayFilePath={project.fakeFilePath}
              >
                <div className="px-6 py-5 flex flex-col gap-2 flex-1">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                      <h3 className="text-jm-fg font-mono font-semibold">
                        {project.title}
                      </h3>
                      <Badge
                        text={project.role}
                        color="bg"
                        borderColor="primary"
                        textColor="primary"
                      />
                    </div>
                    <p className="text-left text-jm-muted-fg text-[12px]! text-xs! italic">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="flex-1 text-jm-muted-fg text-[14px]! text-sm! text-left">
                    {project.description}
                  </p>
                  <div className="border-b border-jm-border flex flex-wrap gap-2 py-4">
                    {project.techStack.map((award: string, jindex: number) => (
                      <Badge
                        key={jindex}
                        text={award}
                        color="bg"
                        borderColor="ui"
                        textColor="fg"
                        dropShadowColor="ui"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {project.awards?.map((award: string, jindex: number) => (
                      <div
                        key={jindex}
                        className="text-jm-fg text-left font-mono text-[11px]! text-xs"
                      >
                        {award}
                      </div>
                    ))}
                    <span className="text-left font-mono text-[10px]! text-jm-muted-fg">
                      {project.additionalInfo}
                    </span>
                  </div>
                </div>
              </FakeMacWindow>
            ),
          )}
        </div>
      </div>
    </Container>
  );
}

export default FeaturedProjects;
