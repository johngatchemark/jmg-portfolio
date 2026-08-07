export default function ProjectsHeader() {
  return (
    <div className="flex flex-col gap-3 text-left max-w-3xl">
      <p className="text-[12px]! text-sm font-mono text-jm-green tracking-widest">
        &gt; sys.catalogprojects()
      </p>
      <h1 className="text-jm-fg h1-stretched m-0! text-left">
        Projects Catalog
      </h1>
      <p className="text-jm-muted-fg text-left text-base leading-relaxed font-sans">
        A comprehensive collection of software engineering systems, interactive AI/ML tools, and mobile application architectures. Click on any project card to open full specifications and examine step-by-step wireframe schematics.
      </p>
    </div>
  );
}
