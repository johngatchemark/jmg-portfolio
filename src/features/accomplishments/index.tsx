import { useState, Fragment } from "react";
import Container from "../../components/container";
import { ExternalLink, Image as ImageIcon, X } from "lucide-react";

interface Achievement {
  date: string;
  title: string;
  event: string;
  host: string;
  photo?: string;
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
    photo: "/assets/accomplishments/blue-hacks.webp",
  },
  {
    date: "Mar 2026",
    title: "Outstanding Oral Presentation Award",
    event:
      "2026 International Conference on Advances in Artificial Intelligence and Machine Learning (AAIML 2026)",
    host: "Chuo University",
    photo: "/assets/accomplishments/AAIML.webp",
  },
  {
    date: "Nov 2025",
    title: "Champion (1st Place)",
    event: "14th IT Skills Olympics (IT Quiz Bee)",
    host: "University of Makati",
    photo: "/assets/accomplishments/umak-14.webp",
  },
  {
    date: "Nov 2025",
    title: "3rd Place (Finals)",
    event: "CodeChum National Programming Challenge, Season 2",
    host: "CodeChum",
  },
  {
    date: "Oct 2025",
    title: "Top 20% Globally",
    event: "QS Reimagine Education Awards 2025",
    host: "QS Quacquarelli Symonds",
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
    title: "Top 22 (out of 112 teams)",
    event: "SAS Curiosity Cup 2025",
    host: "Statistical Analysis System",
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
    event: "2025 National Innovation Day",
    host: "National Innovation Council",
  },
  {
    date: "Dec 2024",
    title: "4th Place",
    event: "CodeChum National Programming Challenge 2024",
    host: "CodeChum",
  },
  {
    date: "Nov 2024",
    title: "2nd Place",
    event: "13th IT Skills Olympics (IT Quiz Bee)",
    host: "University of Makati",
    photo: "/assets/accomplishments/umak-13.webp",
  },
  {
    date: "Oct 2024",
    title: "4th Place",
    event: "Tagisan ng Talino 2024 (Quiz Bee)",
    host: "University of the East",
  },
  {
    date: "Oct 2024",
    title: "Participant",
    event: "StartUpQC",
    host: "Quezon City Government",
  },
  {
    date: "Oct 2024",
    title: "3rd Place, Best Startup Logo, Best Pitch Presentation",
    event: "Philippine Startup Challenge 9",
    host: "Department of Information and Communications Technology",
  },
  {
    date: "Nov 2023",
    title: "2nd Place",
    event: "12th IT Skills Olympics (Java Programming)",
    host: "University of Makati",
  },
  {
    date: "Oct 2023",
    title: "Top 27 NCR Finalists",
    event: "Philippine Startup Challenge 8",
    host: "Department of Information and Communications Technology",
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

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
          <div className="w-full border-2 border-jm-fg dark:border-jm-ui bg-white dark:bg-[#121218] shadow-[4px_4px_0px_var(--color-jm-fg)] dark:shadow-[4px_4px_0px_var(--color-jm-shadow)] rounded-md overflow-hidden [container-type:inline-size]">
            <div className="w-full overflow-x-auto">
              <table className="border-separate border-spacing-0 w-full min-w-[920px] text-left font-sans text-sm">
                <thead>
                  <tr className="bg-[#e8e8e3] dark:bg-[#181920] border-b border-jm-fg dark:border-jm-ui font-mono text-[11px] uppercase tracking-wider text-jm-muted-fg">
                    <th className="py-3 px-5 min-w-[240px]">ACCOMPLISHMENT</th>
                    <th className="py-3 px-5 min-w-[320px]">EVENT</th>
                    <th className="py-3 px-5 min-w-[220px]">
                      HOST / ORGANIZER
                    </th>
                    <th className="py-3 px-5 w-28 whitespace-nowrap">DATE</th>
                    <th className="py-3 px-3 w-16 min-w-[60px] max-w-[68px] text-center whitespace-nowrap sticky right-0 z-20 bg-[#e8e8e3] dark:bg-[#181920] border-l border-jm-fg/15 dark:border-jm-ui/30 shadow-[-3px_0px_6px_-2px_rgba(0,0,0,0.06)] dark:shadow-[-3px_0px_6px_-2px_rgba(0,0,0,0.3)]">
                      PHOTO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {achievementsData.map((item, index) => {
                    const isExpanded = expandedIndex === index;
                    const hasPhoto = Boolean(item.photo);
                    const rowBgClass =
                      index % 2 === 0
                        ? "bg-white dark:bg-[#121218]"
                        : "bg-[#f5f5f0]/70 dark:bg-[#181924]";
                    const stickyCellBgClass =
                      index % 2 === 0
                        ? "bg-white dark:bg-[#121218]"
                        : "bg-[#f5f5f0] dark:bg-[#181924]";

                    return (
                      <Fragment key={index}>
                        <tr
                          className={`transition-colors ${rowBgClass} ${
                            isExpanded
                              ? ""
                              : "border-b border-jm-fg/20 dark:border-jm-ui/40"
                          }`}
                        >
                          <td className="py-3.5 px-5 font-semibold text-jm-fg">
                            {item.title}
                          </td>
                          <td className="py-3.5 px-5 text-jm-muted-fg">
                            {item.event}
                          </td>
                          <td className="py-3.5 px-5 text-jm-muted-fg">
                            {item.host}
                          </td>
                          <td className="py-3.5 px-5 font-mono text-jm-accent font-semibold text-xs whitespace-nowrap">
                            {item.date}
                          </td>
                          {/* Sticky Photo Column */}
                          <td
                            className={`text-center w-16 min-w-[60px] max-w-[68px] p-0 h-full ${
                              isExpanded && hasPhoto
                                ? `before:content-[''] before:absolute before:-bottom-0.75 before:left-0 before:w-full before:h-1 ${
                                    index % 2 === 0
                                      ? "before:bg-white dark:before:bg-[#121218]"
                                      : "before:bg-[#f5f5f0] dark:before:bg-[#181924]"
                                  } sticky right-0 z-30 border-t-2 border-l-2 border-r-2 border-b-0 border-jm-accent dark:border-jm-accent ${stickyCellBgClass}`
                                : `sticky right-0 z-10 border-l border-jm-fg/15 dark:border-jm-ui/30 shadow-[-3px_0px_6px_-2px_rgba(0,0,0,0.06)] dark:shadow-[-3px_0px_6px_-2px_rgba(0,0,0,0.3)] ${stickyCellBgClass}`
                            }`}
                          >
                            {hasPhoto ? (
                              <button
                                type="button"
                                aria-label={
                                  isExpanded
                                    ? "Collapse photo preview"
                                    : "View award acceptance photo"
                                }
                                title={
                                  isExpanded ? "Close preview" : "View photo"
                                }
                                onClick={() => toggleRow(index)}
                                className="w-full h-full min-h-[50px] flex items-center justify-center p-0 text-jm-accent cursor-pointer hover:bg-jm-accent/15 active:opacity-70 transition-colors"
                              >
                                <ImageIcon size={20} />
                              </button>
                            ) : (
                              <div className="w-full h-full min-h-[50px] flex items-center justify-center p-0">
                                <span className="text-jm-muted-fg/40 font-mono text-xs select-none">
                                  —
                                </span>
                              </div>
                            )}
                          </td>
                        </tr>

                        {/* Photo-only preview row */}
                        {isExpanded && hasPhoto && item.photo && (
                          <tr
                            className={`border-b border-jm-fg/20 dark:border-jm-ui/40 ${rowBgClass}`}
                          >
                            <td colSpan={5} className={`p-0 ${rowBgClass}`}>
                              <div className="flex justify-end">
                                <div
                                  className={`animate-reveal-down sticky right-0 z-20 border-2 border-jm-accent dark:border-jm-accent ${stickyCellBgClass} overflow-hidden`}
                                  style={{ width: "min(480px, 100cqw)" }}
                                >
                                  {/* Close button strip — only area with padding */}
                                  <div className="flex justify-end items-center px-2 pt-1.5 pb-1">
                                    <button
                                      type="button"
                                      onClick={() => setExpandedIndex(null)}
                                      className="p-1 text-jm-muted-fg hover:text-jm-accent hover:bg-jm-accent/10 transition-colors cursor-pointer"
                                      title="Close preview"
                                      aria-label="Close preview"
                                    >
                                      <X size={14} />
                                    </button>
                                  </div>
                                  {/* Image container with min-height and dark background placeholder so it never collapses to 0 height */}
                                  <div className="relative min-h-[220px] sm:min-h-[280px] flex items-center justify-center bg-black/5 dark:bg-black/20">
                                    <img
                                      src={item.photo}
                                      alt={`${item.title} - ${item.event}`}
                                      decoding="async"
                                      className="block w-full max-h-[420px] object-contain"
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    );
                  })}
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
          <div className="w-full border-2 border-jm-fg dark:border-jm-ui bg-white dark:bg-[#121218] shadow-[4px_4px_0px_var(--color-jm-fg)] dark:shadow-[4px_4px_0px_var(--color-jm-shadow)] rounded-md overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[620px] text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#e8e8e3] dark:bg-[#181920] border-b border-jm-fg dark:border-jm-ui font-mono text-[11px] uppercase tracking-wider text-jm-muted-fg">
                    <th className="py-3 px-5 min-w-[260px]">CERTIFICATION</th>
                    <th className="py-3 px-5 min-w-[240px]">
                      ISSUER / ORGANIZATION
                    </th>
                    <th className="py-3 px-5 w-24 whitespace-nowrap">DATE</th>
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
                      <td className="py-3.5 px-5 font-semibold text-jm-fg">
                        {item.title}
                      </td>
                      <td className="py-3.5 px-5 text-jm-muted-fg">
                        {item.issuer}
                      </td>
                      <td className="py-3.5 px-5 font-mono text-jm-green font-semibold text-xs whitespace-nowrap">
                        {item.date}
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
          <div className="w-full border-2 border-jm-fg dark:border-jm-ui bg-white dark:bg-[#121218] shadow-[4px_4px_0px_var(--color-jm-fg)] dark:shadow-[4px_4px_0px_var(--color-jm-shadow)] rounded-md p-6 flex flex-col sm:flex-row items-start gap-5">
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
