import Badge from "../../../components/badge";
import { type PresetColor } from "../../../utilities/colorSystem";

export interface StackCategory {
  category: string;
  color: PresetColor;
  items: string[];
}

export const technicalStack: StackCategory[] = [
  {
    color: "green",
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
    color: "cyan",
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
    color: "amber",
    category: "DATA & ML",
    items: ["scikit-learn", "pandas", "NumPy", "Jupyter", "RStudio"],
  },
  {
    color: "magenta",
    category: "DESIGN & TOOLS",
    items: ["Figma", "Blender", "Git", "GitHub", "Photoshop", "Illustrator"],
  },
];

function TechnicalStack() {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-left text-[12px]! font-mono text-jm-cyan tracking-widest">
        &gt; sys.skills()
      </p>
      <h2 className="text-left text-jm-fg h1-stretched m-0!">
        Technical stack.
      </h2>
      <div className="flex flex-col gap-3">
        {(technicalStack as StackCategory[]).map(
          (category: StackCategory, index: number) => (
            <section key={index} className="flex flex-col gap-2">
              <p
                className={`text-left text-[11px]! font-mono font-semibold text-jm-${category.color}`}
              >
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {(category as StackCategory).items.map(
                  (item: string, jindex: number) => (
                    <Badge
                      key={jindex}
                      text={item}
                      color="#e8e8e3"
                      darkColor="bg"
                      textColor="#000000"
                      darkTextColor={category.color}
                      borderColor="#000000"
                      darkBorderColor={category.color}
                      dropShadowColor="#000000"
                      darkDropShadowColor={category.color}
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
