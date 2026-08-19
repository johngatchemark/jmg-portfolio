import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselModalState } from "./types";
import { parseSubcaptionLinks } from "./utils";

interface CarouselModalProps {
  modalState: CarouselModalState | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

function CarouselModal({
  modalState,
  onClose,
  onNavigate,
}: CarouselModalProps) {
  // Always call refs and hooks unconditionally at the top level (Rules of Hooks)
  const modalStateRef = useRef(modalState);
  modalStateRef.current = modalState;

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const onNavigateRef = useRef(onNavigate);
  onNavigateRef.current = onNavigate;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalStateRef.current) return;

      if (e.key === "Escape") {
        onCloseRef.current();
      } else if (e.key === "ArrowLeft") {
        const { gallery, imageIndex } = modalStateRef.current;
        const prevIndex =
          (imageIndex - 1 + gallery.images.length) % gallery.images.length;
        onNavigateRef.current(prevIndex);
      } else if (e.key === "ArrowRight") {
        const { gallery, imageIndex } = modalStateRef.current;
        const nextIndex = (imageIndex + 1) % gallery.images.length;
        onNavigateRef.current(nextIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!modalState) return null;

  const { gallery, imageIndex } = modalState;
  const totalImages = gallery.images.length;
  if (totalImages === 0) return null;

  const safeIndex = ((imageIndex % totalImages) + totalImages) % totalImages;
  const currentImage = gallery.images[safeIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((safeIndex - 1 + totalImages) % totalImages);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((safeIndex + 1) % totalImages);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      {/* Modal Dialog Window - Fullscreen on mobile, stable 85vh height on tablet/desktop */}
      <div
        className="relative w-full h-full sm:h-[85vh] sm:max-h-[850px] sm:max-w-5xl bg-white dark:bg-[#1a1924] border-0 sm:border-2 border-jm-fg dark:border-jm-ui rounded-none sm:rounded-xs overflow-hidden flex flex-col shadow-2xl z-10 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Window Header */}
        <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-jm-fg dark:border-jm-ui bg-white/50 dark:bg-black/40">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="shrink-0">{gallery.icon}</div>
            <div className="flex flex-col text-left truncate">
              <h3 className="font-mono font-bold text-base sm:text-lg text-jm-fg truncate">
                {gallery.title}
              </h3>
              <span className="font-mono text-xs text-jm-primary font-semibold truncate">
                Image {safeIndex + 1} of {totalImages} — {currentImage.caption}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 ml-3 p-2 rounded-xs bg-black/10 dark:bg-white/10 text-jm-fg hover:bg-jm-primary hover:text-white cursor-pointer border border-jm-fg dark:border-jm-ui"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Image Viewer Body - Flex-1 fills the 85vh container stably regardless of image load status */}
        <div className="relative flex-1 min-h-0 w-full bg-black/95 flex items-center justify-center overflow-hidden p-2 sm:p-4">
          <img
            key={currentImage.id}
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-full w-auto h-auto object-contain select-none"
          />

          {/* Modal Arrow Navigation - Stably vertically centered */}
          {totalImages > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jm-primary text-white p-3 rounded-xs border border-white/40 cursor-pointer shadow-lg active:scale-95 z-20"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jm-primary text-white p-3 rounded-xs border border-white/40 cursor-pointer shadow-lg active:scale-95 z-20"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Modal Subcaption Footer - Taller container with top-aligned natural scrolling */}
        <div className="shrink-0 h-32 sm:h-32 bg-white dark:bg-[#1a1924] border-t-2 border-jm-fg dark:border-jm-ui px-4 sm:px-6 py-3.5 sm:py-4 text-left overflow-y-auto">
          <p className="text-jm-fg font-sans text-xs sm:text-sm leading-relaxed w-full">
            <span className="font-mono font-bold">{currentImage.caption}. </span>
            {parseSubcaptionLinks(
              currentImage.subcaption || gallery.description
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarouselModal;
