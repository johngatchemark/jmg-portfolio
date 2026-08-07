import type { ProjectData } from "../data/projects-data";
import FakeMacWindow from "../../../components/fake-mac-window";
import Badge from "../../../components/badge";
import RaisedButton from "../../../components/raised-button";
import WireframePlaceholder from "./wireframe-placeholder";
import { ExternalLink, Layers } from "lucide-react";
import { IconGitHub } from "../../home/components/icons";

interface ProjectCardProps {
  project: ProjectData;
  onOpenModal: (project: ProjectData) => void;
}

export default function ProjectCard({
  project,
  onOpenModal,
}: ProjectCardProps) {
  const topTechStack = project.techStack.slice(0, 3);
  const remainingTechCount = project.techStack.length - 3;

  return (
    <FakeMacWindow
      displayFilePath={project.fakeFilePath}
      className="flex flex-col h-full hover:border-jm-primary dark:hover:border-jm-primary transition-colors cursor-pointer group"
    >
      <div
        className="p-4 sm:p-5 flex flex-col flex-1 gap-3 text-left"
        onClick={() => onOpenModal(project)}
      >
        {/* Top Wireframe Thumbnail Preview */}
        <div className="w-full relative overflow-hidden rounded-xs transition-transform duration-300 group-hover:scale-[1.01]">
          <WireframePlaceholder type={project.keyWireframeType} />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
            <span className="bg-jm-primary text-white text-xs font-mono font-bold px-3 py-1 rounded-xs flex items-center gap-1.5 shadow-md">
              <Layers size={13} /> View Details
            </span>
          </div>
        </div>

        {/* Title, Role & Subtitle */}
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <h3 className="font-mono text-lg font-bold text-jm-fg group-hover:text-jm-primary transition-colors">
              {project.title}
            </h3>
            <Badge
              text={project.role}
              color="bg"
              borderColor="primary"
              textColor="primary"
              className="text-[10px]! px-2 py-0.5"
            />
          </div>
          <p className="font-sans text-[11px] italic text-jm-muted-fg font-medium truncate">
            {project.subtitle}
          </p>
        </div>

        {/* Truncated Description (2-line clamp) */}
        <p className="font-sans text-xs text-jm-muted-fg leading-relaxed flex-1 line-clamp-2">
          {project.description}
        </p>

        {/* Compact Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 py-1.5 border-t border-b border-jm-border items-center">
          {topTechStack.map((tech, idx) => (
            <Badge
              key={idx}
              text={tech}
              color="bg"
              borderColor="ui"
              textColor="fg"
              dropShadowColor="ui"
              className="text-[10px]! px-2 py-0.5"
            />
          ))}
          {remainingTechCount > 0 && (
            <span className="font-mono text-[10px] text-jm-muted-fg px-1 font-semibold">
              +{remainingTechCount} more
            </span>
          )}
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between pt-1 mt-auto gap-2">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-jm-muted-fg hover:text-jm-fg transition-colors flex items-center gap-1 font-mono text-[11px]"
                title="View GitHub Repository"
              >
                <IconGitHub size={14} />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-jm-muted-fg hover:text-jm-primary transition-colors flex items-center gap-1 font-mono text-[11px]"
                title="View Live / Paper"
              >
                <ExternalLink size={14} />
                <span>Live</span>
              </a>
            )}
          </div>

          <RaisedButton
            color="bg"
            borderColor="primary"
            textColor="primary"
            darkTextColor="primary"
            dropShadowColor="primary"
            hoverColor="#e2f4eb"
            darkHoverColor="#12251c"
            className="px-3.5! py-1.5! text-[11px]!"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(project);
            }}
          >
            <span className="font-mono text-[11px] font-semibold flex items-center gap-1">
              Explore &rarr;
            </span>
          </RaisedButton>
        </div>
      </div>
    </FakeMacWindow>
  );
}
