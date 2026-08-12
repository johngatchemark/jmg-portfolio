import { Maximize2 } from "lucide-react";
import type { CarouselImage } from "./types";
import { parseSubcaptionLinks } from "./utils";

interface CarouselCardProps {
  image: CarouselImage;
  index: number;
  totalImages: number;
  onClick: () => void;
  className?: string;
}

function CarouselCard({
  image,
  index,
  totalImages,
  onClick,
  className = "",
}: CarouselCardProps) {
  return (
    <div
      className={`w-[82vw] max-w-[320px] sm:w-[460px] md:w-[580px] sm:max-w-[580px] flex-shrink-0 bg-white dark:bg-[#1a1924] border-2 border-jm-fg dark:border-jm-ui rounded-xs drop-shadow-[4px_4px_0px_var(--color-jm-primary)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] overflow-hidden flex flex-col justify-between group/wideCard cursor-pointer transition-all ${className}`}
      onClick={onClick}
    >
      {/* Image Header with 16/10 Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10 dark:bg-black/40 border-b-2 border-jm-fg dark:border-jm-ui">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover group-hover/wideCard:scale-105 transition-transform duration-500"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/wideCard:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="text-white font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 bg-black/90 dark:bg-[#16151e] px-4 py-2 rounded-xs border border-white/40 dark:border-jm-primary shadow-lg">
            <Maximize2 size={15} /> Click to enlarge
          </span>
        </div>

        {/* Photo Index Badge */}
        <div className="absolute top-4 left-4 bg-white dark:bg-[#16151e] px-3 py-1 rounded-xs border border-jm-fg dark:border-jm-ui font-mono text-xs font-bold text-jm-fg shadow-xs">
          {index + 1} of {totalImages}
        </div>
      </div>

      {/* Caption & Subcaption (Line-clamp-2 truncation) */}
      <div className="p-4 sm:p-5 text-left bg-white dark:bg-[#1a1924] flex-1 justify-start">
        <p className="font-sans text-xs text-jm-fg leading-relaxed line-clamp-2">
          <span className="font-mono font-bold text-jm-fg">{image.caption}. </span>
          {image.subcaption && (
            <span className="text-jm-muted-fg">{parseSubcaptionLinks(image.subcaption)}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default CarouselCard;
