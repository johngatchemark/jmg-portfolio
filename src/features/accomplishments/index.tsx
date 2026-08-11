import Container from "../../components/container";
import Badge from "../../components/badge";
import { ExternalLink } from "lucide-react";

interface Achievement {
  date: string;
  title: string;
  event: string;
  host: string;
}

interface Certification {
  date: string;
  title: string;
  issuer: string;
}

const achievementsData: Achievement[] = [
  {
    date: "Mar 2026",
    title: "Champion (1st Place)",
    event: "Blue Hacks 2026 Hackathon",
    host: "Ateneo de Manila University",
  },
  {
    date: "Mar 2026",
    title: "Outstanding Oral Presentation Award",
    event:
      "2026 International Conference on Advances in Artificial Intelligence and Machine Learning (AAIML 2026)",
    host: "Chuo University",
  },
  {
    date: "Nov 2025",
    title: "Champion",
    event: "14th IT Skills Olympics (IT Quiz Bee)",
    host: "University of Makati",
  },
  {
    date: "Aug 2025",
    title: "Top 10 Finalist",
    event: "Byte Forward Hackathon",
    host: "Converge ICT Solutions Inc.",
  },
  {
    date: "Jul 2025",
    title: "Sponsor (ZenithPads) Award",
    event: "Create & Conquer 2025 Hackathon",
    host: "FEU Institute of Technology",
  },
  {
    date: "May 2025",
    title: "Top 90 Qualifier (out of 178 teams)",
    event: "AppCon 2024",
    host: "OTis Philippines Inc.",
  },
  {
    date: "Apr 2025",
    title: "Champion",
    event: "Filipinnovation HABI (Huddle, Analyze, Build, Innovate) Workshop",
    host: "National Innovation Council (NIC)",
  },
  {
    date: "Feb 2025",
    title: "Top 22 (out of 112 teams)",
    event: "SAS Curiosity Cup 2025",
    host: "Statistical Analysis System (SAS)",
  },
  {
    date: "Nov 2024",
    title: "1st Runner-Up",
    event: "13th IT Skills Olympics (IT Quiz Bee)",
    host: "University of Makati",
  },
  {
    date: "Nov 2023",
    title: "1st Runner-Up",
    event: "12th IT Skills Olympics (Java Programming)",
    host: "University of Makati",
  },
];

const certificationsData: Certification[] = [
  {
    date: "2024",
    title: "IT Specialist Certification (Python)",
    issuer: "Certiport",
  },
];

function AccomplishmentsPage() {
  return (
    <Container>
      <div className="flex flex-col justify-between align-center gap-10 md:gap-15 w-full max-w-120 lg:max-w-6xl lg:w-full mx-5 lg:mx-0 px-5 sm:px-10 lg:px-20 py-12">
        {/* Section 1: Achievements Log */}
        <section className="flex flex-col gap-6 text-left w-full min-w-0">
          <p className="text-left text-[12px]! font-mono text-jm-accent tracking-widest">
            &gt; sys.accomplishments()
          </p>

          <h1 className="h1-stretched text-jm-fg text-left my-0!">
            Accomplishments
          </h1>

          {/* Retro Table Container */}
          <div className="w-full border-2 border-jm-fg dark:border-jm-ui bg-white dark:bg-[#121218] drop-shadow-[4px_4px_0px_var(--color-jm-fg)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] rounded-md overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[640px] text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#e8e8e3] dark:bg-[#181920] border-b border-jm-fg dark:border-jm-ui font-mono text-[11px] uppercase tracking-wider text-jm-muted-fg">
                    <th className="py-3 px-5 w-28 whitespace-nowrap">DATE</th>
                    <th className="py-3 px-5">ACCOMPLISHMENT</th>
                    <th className="py-3 px-5">EVENT</th>
                    <th className="py-3 px-5">HOST / ORGANIZER</th>
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
                        {item.date}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-jm-fg">
                        {item.title}
                      </td>
                      <td className="py-3.5 px-5 text-jm-muted-fg">
                        {item.event}
                      </td>
                      <td className="py-3.5 px-5 text-jm-muted-fg">
                        {item.host}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Certifications */}
        <section className="flex flex-col gap-6 text-left w-full min-w-0">
          <p className="text-left text-[12px]! font-mono text-jm-green tracking-widest">
            &gt; sys.certifications()
          </p>

          <h2 className="h1-stretched text-jm-fg text-left my-0!">
            Certifications
          </h2>

          {/* Retro Table Container */}
          <div className="w-full border-2 border-jm-fg dark:border-jm-ui bg-white dark:bg-[#121218] drop-shadow-[4px_4px_0px_var(--color-jm-fg)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] rounded-md overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[480px] text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#e8e8e3] dark:bg-[#181920] border-b border-jm-fg dark:border-jm-ui font-mono text-[11px] uppercase tracking-wider text-jm-muted-fg">
                    <th className="py-3 px-5 w-24 whitespace-nowrap">DATE</th>
                    <th className="py-3 px-5">CERTIFICATION</th>
                    <th className="py-3 px-5">ISSUER / ORGANIZATION</th>
                  </tr>
                </thead>
                <tbody>
                  {certificationsData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-jm-fg/20 dark:border-jm-ui/40 transition-colors ${
                        index % 2 === 0
                          ? "bg-white dark:bg-[#121218]"
                          : "bg-[#f5f5f0]/70 dark:bg-[#181924]"
                      }`}
                    >
                      <td className="py-3.5 px-5 font-mono text-jm-green font-semibold text-xs whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-jm-fg">
                        {item.title}
                      </td>
                      <td className="py-3.5 px-5 text-jm-muted-fg">
                        {item.issuer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Research Publications */}
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
                  className="font-mono text-[11px]! sm:text-xs text-jm-primary hover:underline flex items-center gap-1 ml-1 min-w-0 max-w-full"
                >
                  <span className="truncate max-w-[180px] xs:max-w-[260px] sm:max-w-none">
                    DOI: 10.1109/AAIML67890.2026.11498122
                  </span>
                  <ExternalLink size={12} className="shrink-0" />
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
