import Badge from "../../../components/badge";
import RaisedContainer from "../../../components/raised-container";

const highlights = [
  "DOST-SEI Scholar",
  "University Scholar",
  "Summa Cum Laude",
];

function Education() {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-left text-[12px]! font-mono text-jm-accent tracking-widest">
        &gt; sys.education()
      </p>
      <RaisedContainer>
        <div className="flex justify-between flex-wrap items-start">
          <div className="text-left text-jm-fg font-bold">
            <p className="text-jm-fg font-bold">University of the East</p>
            <p className="text-[14px]! text-sm text-jm-muted-fg font-normal">
              BS Computer Science · Graduated June 2026
            </p>
          </div>
          <Badge
            text="GWA 1.08"
            color="accent"
            borderColor="accent"
            textColor="light"
            darkTextColor="dark"
          />
        </div>

        <div className="flex flex-wrap gap-2 max-w-100 lg:max-w-full">
          {highlights.map((achievement, index) => (
            <Badge
              key={index}
              text={achievement}
              color="bg"
              darkColor="bg"
              borderColor="accent"
              textColor="fg"
              dropShadowColor="ui"
            />
          ))}
        </div>
      </RaisedContainer>
    </article>
  );
}

export default Education;
