import { useState, useEffect, useLayoutEffect } from "react";
import type { ProjectData } from "../data/projects-data";
import WireframePlaceholder from "./wireframe-placeholder";
import Badge from "../../../components/badge";
import RaisedButton from "../../../components/raised-button";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award,
  FileText,
  Download,
} from "lucide-react";
import { IconGitHub } from "../../home/components/icons";

interface ProjectModalProps {
  project: ProjectData | null;
  originRect: DOMRect | null;
  onClose: () => void;
  onClosingStateChange?: (isClosing: boolean) => void;
}

type AnimState = "closed" | "initial" | "expanding" | "open" | "closing";

export default function ProjectModal({
  project,
  originRect,
  onClose,
  onClosingStateChange,
}: ProjectModalProps) {
  const [animState, setAnimState] = useState<AnimState>("closed");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [targetDimensions, setTargetDimensions] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    isMobile: false,
  });

  // Calculate target modal bounds based on viewport
  const updateTargetDimensions = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isMobile = vw < 640;

    if (isMobile) {
      setTargetDimensions({
        top: 0,
        left: 0,
        width: vw,
        height: vh,
        isMobile: true,
      });
    } else {
      const width = Math.min(1024, vw * 0.9);
      const height = Math.min(820, vh * 0.9);
      const left = (vw - width) / 2;
      const top = Math.max(16, (vh - height) / 2);
      setTargetDimensions({
        top,
        left,
        width,
        height,
        isMobile: false,
      });
    }
  };

  // Mount & trigger entrance expansion animation
  useLayoutEffect(() => {
    if (project && originRect) {
      updateTargetDimensions();
      setActiveSlideIndex(0);
      setAnimState("initial");
      if (onClosingStateChange) onClosingStateChange(false);

      // Lock body scroll
      document.body.style.overflow = "hidden";

      // Step to expanding frame
      const rAF = requestAnimationFrame(() => {
        setAnimState("expanding");
      });

      // Step to fully open state
      const timer = setTimeout(() => {
        setAnimState("open");
      }, 360);

      return () => {
        cancelAnimationFrame(rAF);
        clearTimeout(timer);
      };
    } else if (!project && animState !== "closed") {
      setAnimState("closed");
      document.body.style.overflow = "";
    }
  }, [project, originRect]);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      updateTargetDimensions();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation & Esc trigger
  useEffect(() => {
    if (!project || animState === "closed") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleStartClose();
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
  }, [project, animState]);

  const handleStartClose = () => {
    if (animState === "closing" || animState === "closed") return;
    setAnimState("closing");
    if (onClosingStateChange) onClosingStateChange(true);

    setTimeout(() => {
      setAnimState("closed");
      document.body.style.overflow = "";
      if (onClosingStateChange) onClosingStateChange(false);
      onClose();
    }, 360);
  };

  if (!project || !originRect || animState === "closed") return null;

  // Determine current bounds for the morphing container box
  const isInitialOrClosing = animState === "initial" || animState === "closing";
  const isClosingState = animState === "closing";

  const currentBounds = isInitialOrClosing
    ? {
        top: originRect.top,
        left: originRect.left,
        width: originRect.width,
        height: originRect.height,
        borderRadius: "2px",
      }
    : {
        top: targetDimensions.top,
        left: targetDimensions.left,
        width: targetDimensions.width,
        height: targetDimensions.height,
        borderRadius: targetDimensions.isMobile ? "0px" : "4px",
      };

  const currentGalleryItem = project.gallery[activeSlideIndex];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-text">
      {/* Dimmed Backdrop Overlay */}
      <div
        className={`absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 ${
          isInitialOrClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleStartClose}
      />

      {/* Morphing Expanding Card Container Box */}
      <div
        style={{
          position: "fixed",
          top: `${currentBounds.top}px`,
          left: `${currentBounds.left}px`,
          width: `${currentBounds.width}px`,
          height: `${currentBounds.height}px`,
          borderRadius: currentBounds.borderRadius,
          transition: "top 360ms cubic-bezier(0.16, 1, 0.3, 1), left 360ms cubic-bezier(0.16, 1, 0.3, 1), width 360ms cubic-bezier(0.16, 1, 0.3, 1), height 360ms cubic-bezier(0.16, 1, 0.3, 1), opacity 140ms ease-out 180ms",
          opacity: isClosingState ? 0 : 1,
        }}
        className={`bg-jm-bg dark:bg-[#121218] border-2 border-jm-fg dark:border-jm-ui overflow-hidden flex flex-col shadow-2xl z-50 ${
          isInitialOrClosing
            ? "shadow-[4px_4px_0px_var(--color-jm-fg)] dark:shadow-[4px_4px_0px_var(--color-jm-shadow)]"
            : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar Header - Pixel-perfect match to FakeMacWindow header when shrinking/initial */}
        <div
          className={`flex gap-4 items-center justify-between bg-[#e8e8e3] dark:bg-[#181920] transition-all duration-300 ${
            isInitialOrClosing
              ? "px-4 py-2.5 border-b border-jm-fg dark:border-jm-ui"
              : "px-4 sm:px-6 py-3 border-b-2 border-jm-fg dark:border-jm-ui"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleStartClose();
                }}
                className="bg-[rgb(255,95,87)] w-2.5 h-2.5 rounded-full inline-block cursor-pointer hover:brightness-75 transition-all"
                title="Close (Click red dot)"
              />
              <span className="bg-[rgb(254,188,46)] w-2.5 h-2.5 rounded-full inline-block" />
              <span className="bg-[rgb(40,200,64)] w-2.5 h-2.5 rounded-full inline-block" />
            </div>
            <span className="font-mono text-[11px] text-jm-fg dark:text-jm-light">
              {project.fakeFilePath}
            </span>
          </div>

          {/* Close button X - removed from layout when shrinking so header vertical height aligns 100% with FakeMacWindow */}
          {!isInitialOrClosing && (
            <RaisedButton
              onClick={handleStartClose}
              color="bg"
              borderColor="fg"
              darkBorderColor="ui"
              darkHoverBorderColor="primary"
              textColor="fg"
              hoverColor="#e2e2e8"
              darkHoverColor="#1e1f29"
              title="Close (Esc)"
              className="p-1.5! shrink-0 min-w-0"
            >
              <X size={16} />
            </RaisedButton>
          )}
        </div>

        {/* Detailed Modal Content Body (Fades out in 60ms on close, fades in early at 90ms on open) */}
        <div
          style={{
            transition: isClosingState
              ? "opacity 60ms ease-out 0ms"
              : "opacity 240ms cubic-bezier(0.16, 1, 0.3, 1) 90ms",
          }}
          className={`flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col gap-8 text-left ${
            !isInitialOrClosing && !isClosingState
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Top Section: Key Wireframe & Detailed Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Key Wireframe Preview (Sticky on desktop until Gallery) */}
            <div className="md:col-span-6 flex flex-col gap-2 md:sticky md:top-0 z-10">
              <WireframePlaceholder
                type={project.keyWireframeType}
                imageSrc={project.keyImageSrc}
                title={project.title}
              />
            </div>

            {/* Right: Detailed Specifications */}
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

              {/* Full Un-truncated Description */}
              <p className="font-sans text-xs sm:text-sm text-jm-fg/90 dark:text-jm-light/90 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Key Highlights */}
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

              {/* Technologies */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] font-bold text-jm-fg uppercase">
                  Technologies:
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

              {/* Honors / Recognition */}
              {project.awards && project.awards.length > 0 && (
                <div className="flex flex-col gap-2 bg-jm-primary/10 border border-jm-primary/30 p-3.5 rounded-xs text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-jm-primary font-bold tracking-wider">
                    <Award size={14} /> HONORS &amp; RECOGNITION
                  </div>
                  <ul className="flex flex-col gap-1.5 pl-0.5 m-0 list-none">
                    {project.awards.map((award, i) => (
                      <li
                        key={i}
                        className="text-jm-fg text-xs font-medium flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-jm-primary font-bold text-sm leading-none select-none shrink-0">
                          •
                        </span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
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
                      darkBorderColor="ui"
                      darkHoverBorderColor="primary"
                      textColor="fg"
                      hoverColor="#e2e2e8"
                      darkHoverColor="#1e1f29"
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
                      darkHoverColor="#12251c"
                    >
                      <span className="font-mono text-xs flex items-center gap-1.5">
                        <ExternalLink size={14} /> Live Demo
                      </span>
                    </RaisedButton>
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
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
                      darkHoverColor="#12251c"
                    >
                      <span className="font-mono text-xs flex items-center gap-1.5">
                        <FileText size={14} /> View Research Paper
                      </span>
                    </RaisedButton>
                  </a>
                )}
                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
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
                      darkHoverColor="#12251c"
                    >
                      <span className="font-mono text-xs flex items-center gap-1.5">
                        <Download size={14} /> Download .blend File
                      </span>
                    </RaisedButton>
                  </a>
                )}
              </div>
            </div>
          </div>

          <hr className="border-jm-border my-2" />

          {/* Bottom Section: Separate Gallery Carousel */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-mono text-lg font-bold text-jm-fg">
                  Gallery
                </h3>
              </div>
              <div className="font-mono text-xs text-jm-primary font-bold">
                Slide {activeSlideIndex + 1} of {project.gallery.length}
              </div>
            </div>

            {/* Gallery Carousel Container */}
            <div className="relative border-2 border-jm-fg dark:border-jm-ui rounded-xs bg-[#f4f4ee] dark:bg-[#16161f] p-4 sm:p-6 flex flex-col gap-4">
              <div className="relative w-full overflow-hidden">
                {currentGalleryItem && (
                  <WireframePlaceholder
                    type={currentGalleryItem.wireframeType}
                    imageSrc={currentGalleryItem.imageSrc}
                    title={currentGalleryItem.title}
                  />
                )}

                {project.gallery.length > 1 && (
                  <>
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                      <RaisedButton
                        onClick={() =>
                          setActiveSlideIndex((prev) =>
                            prev === 0 ? project.gallery.length - 1 : prev - 1,
                          )
                        }
                        color="bg"
                        darkColor="#121218"
                        borderColor="fg"
                        darkBorderColor="ui"
                        darkHoverBorderColor="primary"
                        textColor="fg"
                        dropShadowColor="fg"
                        hoverColor="#e2e2e8"
                        darkHoverColor="#1e1f29"
                        title="Previous Wireframe"
                        className="p-2! min-w-0"
                      >
                        <ChevronLeft size={18} />
                      </RaisedButton>
                    </div>

                    <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                      <RaisedButton
                        onClick={() =>
                          setActiveSlideIndex((prev) =>
                            prev === project.gallery.length - 1 ? 0 : prev + 1,
                          )
                        }
                        color="bg"
                        darkColor="#121218"
                        borderColor="fg"
                        darkBorderColor="ui"
                        darkHoverBorderColor="primary"
                        textColor="fg"
                        dropShadowColor="fg"
                        hoverColor="#e2e2e8"
                        darkHoverColor="#1e1f29"
                        title="Next Wireframe"
                        className="p-2! min-w-0"
                      >
                        <ChevronRight size={18} />
                      </RaisedButton>
                    </div>
                  </>
                )}
              </div>

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
