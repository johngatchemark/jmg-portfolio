import Container from "../../components/container";
import Badge from "../../components/badge";
import { ExternalLink } from "lucide-react";

interface Achievement {
  year: string;
  title: string;
  event: string;
  org: string;
}

const achievementsData: Achievement[] = [
  {
    year: "2026",
    title: "Champion (1st Place)",
    event: "Blue Hacks 2026 Hackathon",
    org: "Ateneo de Manila University",
  },
  {
    year: "2026",
    title: "Outstanding Oral Presentation Award",
    event: "AAIML 2026 Conference",
    org: "AAIML 2026 Conference",
  },
  {
    year: "2025",
    title: "Champion",
    event: "14th IT Skills Olympics (IT Quiz Bee)",
    org: "University of Makati",
  },
  {
    year: "2025",
    title: "Champion",
    event: "HABI Innovation Workshop",
    org: "Public Administration Category",
  },
  {
    year: "2025",
    title: "Top 10 Finalist",
    event: "Byte Forward Hackathon",
    org: "Byte Forward",
  },
  {
    year: "2024",
    title: "1st Runner-Up",
    event: "13th IT Skills Olympics (IT Quiz Bee)",
    org: "University of Makati",
  },
  {
    year: "2024",
    title: "IT Specialist Certification (Python)",
    event: "Certiport Certification",
    org: "Certiport",
  },
  {
    year: "2023",
    title: "1st Runner-Up",
    event: "12th IT Skills Olympics (Java Programming)",
    org: "University of Makati",
  },
];

function AccomplishmentsPage() {
  return (
    <Container>
      <div className="flex flex-col justify-between align-center gap-10 md:gap-15 max-w-120 lg:max-w-6xl w-full min-w-0 sm:max-w-[calc(100%-5rem)] lg:w-full mx-10 lg:mx-0 lg:px-20 py-12">
        {/* Section 1: Achievements Log */}
        <section className="flex flex-col gap-6 text-left w-full min-w-0">
          <p className="text-left text-[12px]! font-mono text-jm-accent tracking-widest">
            &gt; sys.accomplishments()
          </p>

          <h1 className="h1-stretched text-jm-fg text-left my-0!">
            Achievements log
          </h1>

          {/* Retro Table Container */}
          <div className="w-full border-2 border-jm-fg dark:border-jm-ui bg-white dark:bg-[#121218] drop-shadow-[4px_4px_0px_var(--color-jm-fg)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] rounded-md overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[580px] text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#e8e8e3] dark:bg-[#181920] border-b border-jm-fg dark:border-jm-ui font-mono text-[11px] uppercase tracking-wider text-jm-muted-fg">
                    <th className="py-3 px-5 w-20">YEAR</th>
                    <th className="py-3 px-5">TITLE</th>
                    <th className="py-3 px-5">EVENT</th>
                    <th className="py-3 px-5">ORG</th>
                  </tr>
                </thead>
                <tbody>
                  {achievementsData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-jm-fg/20 dark:border-jm-ui/40 transition-colors ${
                        index % 2 === 0
                          ? "bg-white dark:bg-[#121218]"
                          : "bg-[#f5f5f0]/70 dark:bg-[#181924]"
                      }`}
                    >
                      <td className="py-3.5 px-5 font-mono text-jm-accent font-semibold text-xs whitespace-nowrap">
                        {item.year}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-jm-fg">
                        {item.title}
                      </td>
                      <td className="py-3.5 px-5 text-jm-muted-fg">
                        {item.event}
                      </td>
                      <td className="py-3.5 px-5 text-jm-muted-fg">
                        {item.org}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Research Publications (Merged) */}
        <section className="flex flex-col gap-4 text-left pt-6">
          <p className="text-left text-[12px]! font-mono text-jm-primary tracking-widest">
            &gt; sys.publications()
          </p>

          <h2 className="h1-stretched text-jm-fg text-left m-0!">
            Research publications
          </h2>

          {/* Research Publication Card */}
          <div className="w-full border-2 border-jm-fg dark:border-jm-ui bg-white dark:bg-[#121218] drop-shadow-[4px_4px_0px_var(--color-jm-fg)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] rounded-md p-6 flex flex-col sm:flex-row items-start gap-5">
            <div className="bg-jm-accent text-white dark:text-[#3b0073] font-mono text-xs font-bold px-3 py-1.5 rounded-xs">
              2026
            </div>

            <div className="flex flex-col gap-2 flex-1 text-left">
              <h3 className="text-jm-fg font-mono font-bold text-base leading-snug">
                Scaffl.ed: LLM-Driven Java Debugging Tutor via Gaze &amp; Mouse
                Tracking
              </h3>

              <p className="text-jm-muted-fg text-xs font-sans">
                International Conference on Advances in AI and Machine Learning
                (AAIML 2026) &middot; Tokyo, Japan &middot; Outstanding Oral
                Presentation Award
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Badge
                  text="IEEE Xplore"
                  color="bg"
                  borderColor="accent"
                  textColor="accent"
                  dropShadowColor="ui"
                />
                <Badge
                  text="Scopus"
                  color="bg"
                  borderColor="accent"
                  textColor="accent"
                  dropShadowColor="ui"
                />
                <a
                  href="https://doi.org/10.1109/AAIML67890.2026.11498122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-jm-primary hover:underline flex items-center gap-1 ml-1"
                >
                  <span>DOI: 10.1109/AAIML67890.2026.11498122</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default AccomplishmentsPage;
