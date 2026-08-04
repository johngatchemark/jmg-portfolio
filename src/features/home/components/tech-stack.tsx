import Badge from "../../../components/badge";
import { type PresetColor } from "../../../utilities/colorSystem";

export interface StackCategory {
  category: string;
  color: PresetColor;
  items: string[];
}

export const technicalStack: StackCategory[] = [
  {
    color: "primary",
    category: "LANGUAGES",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "C++",
      "C#",
      "Java",
      "Kotlin",
      "PHP",
      "HTML",
      "CSS",
    ],
  },
  {
    color: "primary",
    category: "FRAMEWORKS",
    items: [
      "React.js",
      "Next.js",
      "FastAPI",
      "Tailwind CSS",
      "Jetpack Compose",
      "Laravel",
    ],
  },
  {
    color: "primary",
    category: "DATA & ML",
    items: ["scikit-learn", "pandas", "NumPy", "Jupyter", "RStudio"],
  },
  {
    color: "primary",
    category: "DESIGN & TOOLS",
    items: ["Figma", "Blender", "Git", "GitHub", "Photoshop", "Illustrator"],
  },
];

function TechnicalStack({ className = "" }: { className?: string }) {
  return (
    <article
      className={`flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start ${className}`}
    >
      <p className="text-left text-[12px]! font-mono text-jm-primary tracking-widest">
        &gt; sys.skills()
      </p>
      <h2 className="text-left text-jm-fg h1-stretched m-0!">
        Technical stack
      </h2>
      <div className="flex flex-col gap-3">
        {(technicalStack as StackCategory[]).map(
          (category: StackCategory, index: number) => (
            <section key={index} className="flex flex-col gap-2">
              <p
                className="text-left text-[11px]! font-mono font-semibold text-jm-primary"
              >
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {(category as StackCategory).items.map(
                  (item: string, jindex: number) => (
                    <Badge
                      key={jindex}
                      text={item}
                      color="bg"
                      darkColor="bg"
                      textColor="fg"
                      darkTextColor="fg"
                      borderColor="ui"
                      darkBorderColor="ui"
                      dropShadowColor="ui"
                    />
                  ),
                )}
              </div>
            </section>
          ),
        )}
      </div>
    </article>
  );
}

export default TechnicalStack;
