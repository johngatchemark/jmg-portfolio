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
  const [isClosing, setIsClosing] = useState(false);

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
    <main className="w-full min-h-screen relative">
      <Container>
        <div className="flex flex-col justify-between items-start gap-10 max-w-120 lg:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-20 py-12">
          {/* Section Header */}
          <ProjectsHeader />

          {/* Compact Equal-Width Responsive Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {projectsData.map((project) => (
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
      </Container>

      {/* Animated Card Morphing Modal */}
      <ProjectModal
        project={selectedProject}
        originRect={originRect}
        onClose={handleCloseModal}
        onClosingStateChange={setIsClosing}
      />
    </main>
  );
}

export default Projects;
