import Badge from "../../../components/badge";
import RaisedContainer from "../../../components/raised-container";

// Will be refactored for future implementation with multiple experiences
const bigPondAchievements = [
  "Built responsive interfaces for a barangay management system with TypeScript, React.js, and Tailwind CSS.",
  "Presented prototype to four barangay offices in Quezon City, generating administrator interest.",
  "Post-internship: migrated database from SQLite to PostgreSQL.",
];

function Experience() {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-left text-[12px]! font-mono text-jm-cyan tracking-widest">
        &gt; sys.experience()
      </p>
      <RaisedContainer>
        <div className="flex justify-between flex-wrap items-start">
          <div className="text-left">
            <p className="text-jm-fg font-bold">Big Pond Education</p>
            <p className="text-[14px]! text-sm text-jm-muted-fg font-normal">
              Frontend Developer Intern · June – Aug 2025
            </p>
          </div>
          <Badge
            text="INTERNSHIP"
            color="#ffffff"
            darkColor="bg"
            borderColor="cyan"
            textColor="cyan"
            dropShadowColor="cyan"
          />
        </div>

        <div>
          <ul className="flex flex-col list-['>'] gap-2">
            {bigPondAchievements.map((item, index) => (
              <li
                key={index}
                className="text-[14px] pl-3 text-left text-jm-muted-fg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </RaisedContainer>
    </article>
  );
}

export default Experience;
