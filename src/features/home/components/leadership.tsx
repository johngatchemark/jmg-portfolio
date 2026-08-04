import Badge from "../../../components/badge";
import RaisedContainer from "../../../components/raised-container";

export interface LeadershipItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  badgeText: string;
  badgeColor?: string;
  badgeBorderColor?: string;
  badgeTextColor?: string;
  badgeDropShadowColor?: string;
  achievements: string[];
  techStack?: string[];
}

export const leadershipData: LeadershipItem[] = [
  {
    id: "jpcs-ue",
    organization: "JPCS – UE Manila Chapter",
    role: "Dept. Head of Software Development",
    period: "July 2025 – April 2026",
    badgeText: "LEADERSHIP",
    badgeColor: "#ffffff",
    badgeBorderColor: "green",
    badgeTextColor: "green",
    badgeDropShadowColor: "green",
    achievements: [
      "Led development of the organization's official website (jpcs-ue.tech).",
      "Collaborated with student officers to implement website updates supporting organizational initiatives.",
    ],
    techStack: ["TypeScript", "React.js", "Web Development"],
  },
  {
    id: "ue-ccss-rd",
    organization: "UE CCSS R&D Unit",
    role: "Research Committee Assistant",
    period: "Aug 2023 – June 2024",
    badgeText: "RESEARCH",
    badgeColor: "#ffffff",
    badgeBorderColor: "amber",
    badgeTextColor: "amber",
    badgeDropShadowColor: "amber",
    achievements: [
      "Coordinated and facilitated online cybersecurity webinars to enhance awareness among students.",
      "Assisted in planning and executing college week competitions promoting math and computer science.",
    ],
    techStack: ["Cybersecurity", "Event Management"],
  },
];

function Leadership() {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-left text-[12px]! font-mono text-jm-green tracking-widest">
        &gt; sys.leadership()
      </p>

      {/* Timeline container with left padding */}
      <div className="relative flex flex-col gap-8 pl-8">
        {leadershipData.map((item, index) => {
          const isLast = index === leadershipData.length - 1;

          return (
            <div key={item.id} className="relative z-10">
              {/* Vertical line segment to next item (stops at last item node) */}
              {!isLast && (
                <div
                  className="absolute -left-5 top-6 -bottom-14 w-0.5 border-l-2 border-dashed border-jm-green/60 dark:border-jm-green/80 z-0 pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* Horizontal line connector connecting node to card */}
              <div
                className="absolute -left-5 top-8.5 w-5 h-0.5 border-t-2 border-dashed border-jm-green/60 dark:border-jm-green/80 z-0 pointer-events-none"
                aria-hidden="true"
              />

              {/* Retro 8-bit Timeline Node Marker */}
              <div
                className="absolute -left-7.5 top-6 w-5 h-5 z-20 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 border-2 border-jm-fg bg-white dark:bg-jm-bg drop-shadow-[2px_2px_0px_var(--color-jm-fg)] rounded-none flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-jm-green" />
                </div>
              </div>

              {/* Leadership Card */}
              <RaisedContainer>
                <div className="flex justify-between flex-wrap items-start gap-2">
                  <div className="text-left">
                    <p className="text-jm-fg font-bold">{item.organization}</p>
                    <p className="text-[14px]! text-sm text-jm-muted-fg font-normal">
                      {item.role} · {item.period}
                    </p>
                  </div>
                  <Badge
                    text={item.badgeText}
                    color={item.badgeColor || "#ffffff"}
                    darkColor="bg"
                    borderColor={item.badgeBorderColor || "green"}
                    textColor={item.badgeTextColor || "green"}
                    dropShadowColor={item.badgeDropShadowColor || "green"}
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

export default Leadership;
