import { useState } from "react";
import Container from "../../components/container";
import ProjectsHeader from "./components/projects-header";
import ProjectCard from "./components/project-card";
import ProjectModal from "./components/project-modal";
import { projectsData, type ProjectData } from "./data/projects-data";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);

  const handleOpenModal = (project: ProjectData, rect: DOMRect) => {
    setOriginRect(rect);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setOriginRect(null);
  };

  return (
    <main className="w-full min-h-screen py-12 relative">
      <Container>
        <div className="flex flex-col justify-between items-start gap-10 max-w-120 lg:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-20">
          {/* Section Header */}
          <ProjectsHeader />

          {/* Compact Responsive Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedProject?.id === project.id}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* Animated Card Morphing Modal */}
      <ProjectModal
        project={selectedProject}
        originRect={originRect}
        onClose={handleCloseModal}
      />
    </main>
  );
}

export default Projects;
