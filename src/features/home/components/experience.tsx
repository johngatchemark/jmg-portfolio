import Badge from "../../../components/badge";
import RaisedContainer from "../../../components/raised-container";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  badgeText: string;
  badgeColor?: string;
  badgeBorderColor?: string;
  badgeTextColor?: string;
  badgeDropShadowColor?: string;
  achievements: string[];
  techStack?: string[];
  isCurrent?: boolean;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "data-annotation",
    company: "Data Annotation",
    role: "AI Trainer (Freelance)",
    period: "July 2026 – Present",
    badgeText: "FREELANCE",
    badgeColor: "bg",
    badgeBorderColor: "secondary",
    badgeTextColor: "secondary",
    badgeDropShadowColor: "secondary",
    isCurrent: true,
    achievements: [
      "Evaluated AI models on complex programming and reasoning tasks.",
    ],
    techStack: ["Python", "TypeScript", "AI Training", "LLMs"],
  },
  {
    id: "big-pond",
    company: "Big Pond Education",
    role: "Frontend Developer Intern",
    period: "June – Aug 2025",
    badgeText: "INTERNSHIP",
    badgeColor: "bg",
    badgeBorderColor: "secondary",
    badgeTextColor: "secondary",
    badgeDropShadowColor: "secondary",
    isCurrent: false,
    achievements: [
      "Built responsive interfaces for a barangay management system with TypeScript, React.js, and Tailwind CSS.",
      "Presented prototype to four barangay offices in Quezon City, generating administrator interest.",
      "Post-internship: migrated database from SQLite to PostgreSQL.",
    ],
    techStack: ["TypeScript", "React.js", "Tailwind CSS", "PostgreSQL"],
  },
];

function Experience() {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-left text-[12px]! font-mono text-jm-secondary tracking-widest">
        &gt; sys.experience()
      </p>

      {/* Timeline container with left padding */}
      <div className="relative flex flex-col gap-8 pl-8">
        {experiencesData.map((item, index) => {
          const isLatest = index === 0;
          const isLast = index === experiencesData.length - 1;

          return (
            <div key={item.id} className="relative z-10">
              {/* Vertical line segment to next item (stops at last item node) */}
              {!isLast && (
                <div
                  className="absolute -left-5 top-6 -bottom-14 w-0.5 border-l-2 border-dashed border-jm-secondary/60 dark:border-jm-secondary/80 z-0 pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* Horizontal line connector connecting node to card */}
              <div
                className="absolute -left-5 top-8.5 w-5 h-0.5 border-t-2 border-dashed border-jm-secondary/60 dark:border-jm-secondary/80 z-0 pointer-events-none"
                aria-hidden="true"
              />

              {/* Retro 8-bit Timeline Node Marker (no scale on hover) */}
              <div
                className="absolute -left-7.5 top-6 w-5 h-5 z-20 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <div
                  className={`w-5 h-5 border-2 ${
                    isLatest
                      ? "border-jm-secondary bg-white dark:bg-jm-bg drop-shadow-[2px_2px_0px_var(--color-jm-secondary)] dark:drop-shadow-[2px_2px_0px_var(--color-jm-shadow)]"
                      : "border-jm-fg dark:border-jm-ui bg-white dark:bg-jm-bg drop-shadow-[2px_2px_0px_var(--color-jm-fg)] dark:drop-shadow-[2px_2px_0px_var(--color-jm-shadow)]"
                  } rounded-none flex items-center justify-center`}
                >
                  {isLatest ? (
                    <div className="w-2 h-2 bg-jm-secondary animate-pulse" />
                  ) : (
                    <div className="w-1.5 h-1.5 bg-jm-secondary/70" />
                  )}
                </div>
              </div>

              {/* Experience Card */}
              <RaisedContainer>
                <div className="flex justify-between flex-wrap items-start gap-2">
                  <div className="text-left">
                    <p className="text-jm-fg font-bold">{item.company}</p>
                    <p className="text-[14px]! text-sm text-jm-muted-fg font-normal">
                      {item.role} · {item.period}
                    </p>
                  </div>
                  <Badge
                    text={item.badgeText}
                    color={item.badgeColor || "bg"}
                    darkColor="bg"
                    borderColor={item.badgeBorderColor || "secondary"}
                    textColor={item.badgeTextColor || "secondary"}
                    dropShadowColor="ui"
                  />
                </div>

                <div>
                  <ul className="flex flex-col list-['>'] gap-2 mt-2">
                    {item.achievements.map((achievement, achievementIdx) => (
                      <li
                        key={achievementIdx}
                        className="text-[14px] pl-3 text-left text-jm-muted-fg"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </RaisedContainer>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Experience;
