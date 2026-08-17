import { useEffect } from "react";
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
  if (!modalState) return null;

  const { gallery, imageIndex } = modalState;
  const currentImage = gallery.images[imageIndex];

  const handlePrev = () => {
    const newIndex =
      imageIndex === 0 ? gallery.images.length - 1 : imageIndex - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      imageIndex === gallery.images.length - 1 ? 0 : imageIndex + 1;
    onNavigate(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imageIndex, gallery.images.length]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-[#1a1924] border-0 sm:border-2 border-jm-fg dark:border-jm-ui w-full h-full sm:h-[85vh] sm:max-h-[850px] sm:max-w-5xl rounded-none sm:rounded-xs overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-jm-fg dark:border-jm-ui bg-white/50 dark:bg-black/40">
          <div className="flex items-center gap-3 min-w-0">
            <div className="shrink-0">{gallery.icon}</div>
            <div className="flex flex-col text-left truncate">
              <h3 className="font-mono font-bold text-base sm:text-lg text-jm-fg truncate">
                {gallery.title}
              </h3>
              <span className="font-mono text-xs text-jm-primary font-semibold truncate">
                Image {imageIndex + 1} of {gallery.images.length} —{" "}
                {currentImage.caption}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 ml-3 p-2 rounded-xs bg-black/10 dark:bg-white/10 text-jm-fg hover:bg-jm-primary hover:text-white transition-colors cursor-pointer border border-jm-fg dark:border-jm-ui"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Image Viewer Body - Fixed flex-1 container preventing vertical cropping */}
        <div className="relative flex-1 min-h-0 w-full bg-black/95 flex items-center justify-center overflow-hidden p-3 sm:p-6">
          <img
            key={currentImage.id}
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-full w-auto h-auto object-contain select-none transition-all duration-200"
          />

          {/* Modal Arrow Navigation - Stably vertically centered regardless of caption length */}
          {gallery.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jm-primary text-white p-3 rounded-xs border border-white/40 transition-transform hover:scale-110 cursor-pointer shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jm-primary text-white p-3 rounded-xs border border-white/40 transition-transform hover:scale-110 cursor-pointer shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Modal Subcaption Footer - Constant height to ensure image viewer and nav buttons stay stable */}
        <div className="shrink-0 h-20 sm:h-24 bg-white dark:bg-[#1a1924] border-t-2 border-jm-fg dark:border-jm-ui px-4 sm:px-6 py-3 text-left overflow-y-auto flex items-center">
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
