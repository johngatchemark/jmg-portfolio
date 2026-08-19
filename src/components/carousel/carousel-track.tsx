import { useState, useRef, useEffect } from "react";
import Container from "../container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselCard from "./carousel-card";
import type { CarouselGallery } from "./types";
import RaisedButton from "../raised-button";

interface CarouselTrackProps {
  gallery: CarouselGallery;
  onImageClick: (gallery: CarouselGallery, imageIndex: number) => void;
}

function CarouselTrack({ gallery, onImageClick }: CarouselTrackProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollBounds = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    updateScrollBounds();
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;

    const track = container.firstElementChild as HTMLElement | null;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length === 0) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;

    const containerWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;

    // Calculate the centered scroll target for each card
    const targets = cards.map((card, idx) => {
      if (idx === 0) return 0;
      if (idx === cards.length - 1) return maxScroll;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const target = cardCenter - containerWidth / 2;
      return Math.max(0, Math.min(maxScroll, target));
    });

    let targetScroll: number;

    if (direction === "right") {
      // Find the first target positioned meaningfully to the right of current scroll
      const nextTarget = targets.find((t) => t > currentScroll + 20);
      targetScroll = nextTarget !== undefined ? nextTarget : maxScroll;
    } else {
      // Find the last target positioned meaningfully to the left of current scroll
      const prevTargets = targets.filter((t) => t < currentScroll - 20);
      targetScroll =
        prevTargets.length > 0 ? prevTargets[prevTargets.length - 1] : 0;
    }

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setTimeout(updateScrollBounds, 400);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Gallery Header */}
      <Container>
        <div className="max-w-120 lg:max-w-6xl w-full mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-1 text-left">
          <div className="flex items-center gap-2">
            {gallery.icon}
            <h3 className="text-jm-fg font-mono font-bold text-xl md:text-2xl tracking-tight">
              {gallery.title}
            </h3>
          </div>
          <p className="text-jm-muted-fg font-sans text-xs sm:text-sm">
            {gallery.description}
          </p>
        </div>
      </Container>

      {/* Edge-to-Edge Scrollable Track */}
      <div
        ref={carouselRef}
        onScroll={updateScrollBounds}
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-auto no-scrollbar py-2 scroll-smooth"
      >
        {/* Inner Track Padding-Left matches section header left margin exactly on all screen sizes */}
        <div className="flex items-stretch gap-6 sm:gap-8 w-max pl-[max(1.5rem,calc((100vw-30rem)/2+1.5rem))] sm:pl-[max(2.5rem,calc((100vw-30rem)/2+2.5rem))] lg:pl-[max(5rem,calc((100vw-72rem)/2+5rem))] pr-12 md:pr-24">
          {gallery.images.map((img, imgIdx) => (
            <CarouselCard
              key={img.id}
              image={img}
              index={imgIdx}
              totalImages={gallery.images.length}
              onClick={() => onImageClick(gallery, imgIdx)}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <Container>
        <div className="max-w-120 lg:max-w-6xl w-full mx-auto px-5 sm:px-10 lg:px-20 flex items-center justify-between pt-1">
          <span className="font-mono text-xs text-jm-muted-fg">
            {gallery.images.length} photos in gallery — Scroll right &rarr;
          </span>
          <div className="flex items-center gap-2">
            <RaisedButton
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              title={`Scroll ${gallery.title} left`}
              color="bg"
              darkColor="#1a1924"
              borderColor="fg"
              darkBorderColor="ui"
              darkHoverBorderColor="primary"
              textColor="fg"
              dropShadowColor="primary"
              darkDropShadowColor="primary"
              hoverColor="#e4e4dd"
              darkHoverColor="#1e1f29"
              className={`p-2! min-w-0 ${!canScrollLeft ? "opacity-30 cursor-not-allowed shadow-none!" : ""}`}
            >
              <ChevronLeft size={18} />
            </RaisedButton>

            <RaisedButton
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              title={`Scroll ${gallery.title} right`}
              color="bg"
              darkColor="#1a1924"
              borderColor="fg"
              darkBorderColor="ui"
              darkHoverBorderColor="primary"
              textColor="fg"
              dropShadowColor="primary"
              darkDropShadowColor="primary"
              hoverColor="#e4e4dd"
              darkHoverColor="#1e1f29"
              className={`p-2! min-w-0 ${!canScrollRight ? "opacity-30 cursor-not-allowed shadow-none!" : ""}`}
            >
              <ChevronRight size={18} />
            </RaisedButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CarouselTrack;
