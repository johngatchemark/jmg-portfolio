import { useState, useEffect } from "react";
import type { ProjectData } from "../data/projects-data";
import WireframePlaceholder from "./wireframe-placeholder";
import Badge from "../../../components/badge";
import RaisedButton from "../../../components/raised-button";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Award,
} from "lucide-react";
import { IconGitHub } from "../../home/components/icons";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Reset slide index when modal project changes
  useEffect(() => {
    setActiveSlideIndex(0);
  }, [project]);

  // Keyboard navigation & ESC handler
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setActiveSlideIndex((prev) =>
          prev === 0 ? project.gallery.length - 1 : prev - 1,
        );
      } else if (e.key === "ArrowRight") {
        setActiveSlideIndex((prev) =>
          prev === project.gallery.length - 1 ? 0 : prev + 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentGalleryItem = project.gallery[activeSlideIndex];

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-jm-bg dark:bg-[#121218] border-0 sm:border-2 border-jm-fg dark:border-jm-ui w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-5xl rounded-none sm:rounded-xs overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-jm-fg dark:border-jm-ui bg-[#e8e8e3] dark:bg-[#181920] shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="bg-[rgb(255,95,87)] w-2.5 h-2.5 rounded-full inline-block" />
              <span className="bg-[rgb(254,188,46)] w-2.5 h-2.5 rounded-full inline-block" />
              <span className="bg-[rgb(40,200,64)] w-2.5 h-2.5 rounded-full inline-block" />
            </div>
            <span className="font-mono text-xs text-jm-fg dark:text-jm-light font-semibold">
              {project.fakeFilePath}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs bg-black/10 dark:bg-white/10 text-jm-fg hover:bg-jm-primary hover:text-white transition-colors cursor-pointer border border-jm-fg dark:border-jm-ui flex items-center justify-center"
            title="Close modal (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col gap-8 text-left">
          {/* Top Section: Key Wireframe & Overview Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Key Wireframe Preview */}
            <div className="md:col-span-6 flex flex-col gap-2">
              <div className="font-mono text-xs text-jm-green font-bold flex items-center gap-1.5">
                <Layers size={14} /> KEY WIREFRAME SCHEMATIC
              </div>
              <WireframePlaceholder type={project.keyWireframeType} />
            </div>

            {/* Right: Project Specifications */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-jm-fg m-0!">
                    {project.title}
                  </h2>
                  <Badge
                    text={project.role}
                    color="bg"
                    borderColor="primary"
                    textColor="primary"
                  />
                </div>
                <p className="font-sans text-xs italic text-jm-muted-fg font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Detailed Bullet Points */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs font-bold text-jm-fg uppercase tracking-wider">
                  &gt; Key Architecture &amp; Execution:
                </span>
                <ul className="list-disc list-inside text-xs sm:text-sm font-sans text-jm-muted-fg space-y-1.5 pl-1">
                  {project.detailedOverview.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] font-bold text-jm-fg uppercase">
                  Tech Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <Badge
                      key={i}
                      text={tech}
                      color="bg"
                      borderColor="ui"
                      textColor="fg"
                      dropShadowColor="ui"
                    />
                  ))}
                </div>
              </div>

              {/* Honors / Awards */}
              {project.awards && project.awards.length > 0 && (
                <div className="flex flex-col gap-1 bg-jm-primary/10 border border-jm-primary/30 p-3 rounded-xs text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-jm-primary font-bold">
                    <Award size={14} /> HONORS &amp; RECOGNITION
                  </div>
                  {project.awards.map((award, i) => (
                    <span key={i} className="text-jm-fg text-xs font-medium">
                      {award}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline"
                  >
                    <RaisedButton
                      color="bg"
                      borderColor="fg"
                      textColor="fg"
                      hoverColor="#e2e2e8"
                    >
                      <span className="font-mono text-xs flex items-center gap-1.5">
                        <IconGitHub size={14} /> View Repository
                      </span>
                    </RaisedButton>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline"
                  >
                    <RaisedButton
                      color="bg"
                      borderColor="primary"
                      textColor="primary"
                      darkTextColor="primary"
                      hoverColor="#e2f4eb"
                    >
                      <span className="font-mono text-xs flex items-center gap-1.5">
                        <ExternalLink size={14} /> Live Demo / Paper
                      </span>
                    </RaisedButton>
                  </a>
                )}
              </div>
            </div>
          </div>

          <hr className="border-jm-border my-2" />

          {/* Bottom Section: Separate Wireframe Gallery Carousel */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-jm-green font-bold flex items-center gap-1.5">
                  &gt; WIREFRAME GALLERY CAROUSEL
                </span>
                <h3 className="font-mono text-lg font-bold text-jm-fg">
                  Interactive Screen Blueprints
                </h3>
              </div>
              <div className="font-mono text-xs text-jm-primary font-bold">
                Slide {activeSlideIndex + 1} of {project.gallery.length}
              </div>
            </div>

            {/* Gallery Carousel Viewer */}
            <div className="relative border-2 border-jm-fg dark:border-jm-ui rounded-xs bg-[#f4f4ee] dark:bg-[#16161f] p-4 sm:p-6 flex flex-col gap-4">
              {/* Wireframe Display */}
              <div className="relative w-full overflow-hidden">
                {currentGalleryItem && (
                  <WireframePlaceholder
                    type={currentGalleryItem.wireframeType}
                  />
                )}

                {/* Left/Right Navigation Overlay Buttons */}
                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jm-primary text-white p-2.5 rounded-xs border border-white/40 transition-transform hover:scale-110 cursor-pointer shadow-lg z-10"
                      title="Previous Wireframe"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jm-primary text-white p-2.5 rounded-xs border border-white/40 transition-transform hover:scale-110 cursor-pointer shadow-lg z-10"
                      title="Next Wireframe"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Wireframe Caption & Details */}
              {currentGalleryItem && (
                <div className="flex flex-col gap-1 text-left bg-jm-bg dark:bg-[#121218] p-3 sm:p-4 rounded-xs border border-jm-fg/20 dark:border-jm-ui/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-mono font-bold text-sm text-jm-fg">
                      {currentGalleryItem.title}
                    </h4>
                    <span className="font-mono text-xs text-jm-secondary font-semibold">
                      {currentGalleryItem.caption}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-jm-muted-fg leading-relaxed">
                    {currentGalleryItem.description}
                  </p>
                </div>
              )}

              {/* Step Dots Navigation */}
              <div className="flex items-center justify-center gap-2 pt-1">
                {project.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`h-2.5 rounded-xs transition-all cursor-pointer ${
                      idx === activeSlideIndex
                        ? "w-8 bg-jm-primary"
                        : "w-2.5 bg-jm-fg/30 dark:bg-white/30 hover:bg-jm-primary/60"
                    }`}
                    title={`Go to wireframe ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
