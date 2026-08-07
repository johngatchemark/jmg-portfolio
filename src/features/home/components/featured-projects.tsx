import { useState } from "react";
import { Link } from "@tanstack/react-router";
import Container from "../../../components/container";
import RaisedButton from "../../../components/raised-button";
import ProjectCard from "../../projects/components/project-card";
import ProjectModal from "../../projects/components/project-modal";
import { projectsData, type ProjectData } from "../../projects/data/projects-data";

function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const topThreeProjects = projectsData.slice(0, 3);

  const handleOpenModal = (project: ProjectData, rect: DOMRect) => {
    setIsClosing(false);
    setOriginRect(rect);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setOriginRect(null);
    setIsClosing(false);
  };

  return (
    <Container>
      <div className="flex flex-col justify-between align-center gap-6 max-w-120 lg:max-w-6xl lg:w-full mx-10 lg:mx-0 lg:px-20">
        <p className="text-left text-[12px]! text-sm font-mono text-jm-green tracking-widest">
          &gt; sys.previewprojects()
        </p>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-left text-jm-fg h1-stretched m-0!">
            Featured projects
          </h2>
          <Link to="/projects" className="no-underline">
            <RaisedButton
              color="bg"
              borderColor="primary"
              textColor="primary"
              darkTextColor="primary"
              dropShadowColor="primary"
              hoverColor="#e2f4eb"
              darkHoverColor="#12251c"
              hoverTextColor="primary"
              darkHoverTextColor="primary"
            >
              <span className="font-mono text-[12px]! text-sm font-medium">
                Explore All Projects &rarr;
              </span>
            </RaisedButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {topThreeProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject?.id === project.id}
              isClosing={selectedProject?.id === project.id && isClosing}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Animated Card Morphing Modal on Home Page */}
      <ProjectModal
        project={selectedProject}
        originRect={originRect}
        onClose={handleCloseModal}
        onClosingStateChange={setIsClosing}
      />
    </Container>
  );
}

export default FeaturedProjects;
