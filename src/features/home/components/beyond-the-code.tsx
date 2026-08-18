import { useState } from "react";
import Container from "../../../components/container";
import {
  CarouselTrack,
  CarouselModal,
  type CarouselGallery,
  type CarouselModalState,
} from "../../../components/carousel";
import { hobbyGalleries } from "./beyond-the-code/data";
import PixelGridTransition from "../../../components/pixel-grid-transition";
import { useTheme } from "../../../context/theme-context";

function BeyondTheCode() {
  const [modalState, setModalState] = useState<CarouselModalState | null>(null);
  const { resolvedTheme } = useTheme();
  const inColor = resolvedTheme === "light" ? "#ebe6db" : "#14131a";
  const outColor = resolvedTheme === "light" ? "#f5f5f0" : "#0a0a0d";

  const handleOpenModal = (gallery: CarouselGallery, imageIndex: number) => {
    setModalState({ gallery, imageIndex });
  };

  const handleCloseModal = () => {
    setModalState(null);
  };

  const handleNavigateModal = (imageIndex: number) => {
    setModalState((prev) => {
      if (!prev) return null;
      const total = prev.gallery.images.length;
      if (total === 0) return prev;
      const safeIndex = ((imageIndex % total) + total) % total;
      return { ...prev, imageIndex: safeIndex };
    });
  };

  return (
    <>
      <PixelGridTransition inColor={inColor} outColor={outColor} />
      <section className="w-full max-w-full bg-[var(--color-jm-btc-bg)] py-16 transition-colors duration-500 overflow-x-hidden">
        {/* Section Title Header */}
        <Container>
          <div className="flex flex-col justify-between items-stretch gap-10 max-w-120 lg:max-w-6xl w-full mx-auto px-5 sm:px-10 lg:px-20">
            <div className="flex flex-col gap-3 text-left w-full">
              <div className="flex items-center gap-2">
                <p className="text-[12px]! text-sm font-mono text-jm-green tracking-widest">
                  &gt; sys.beyondthecode()
                </p>
              </div>

              <h2 className="text-jm-fg h1-stretched m-0! text-left">
                Beyond the Code
              </h2>

              <p className="text-jm-muted-fg text-left text-base leading-relaxed font-sans">
                Creativity doesn't stop when I step away from the terminal. I am
                endlessly fascinated by the idea of scale—like how a simple
                interlocking pattern of loops can turn into a beautiful garment,
                or how a set of primitive tools can be used to build complex,
                elaborate interconnected structures in a game.
              </p>
            </div>
          </div>
        </Container>

        {/* Carousel Tracks using Global CarouselTrack */}
        <div className="w-full flex flex-col gap-16 mt-8">
          {hobbyGalleries.map((gallery) => (
            <CarouselTrack
              key={gallery.id}
              gallery={gallery}
              onImageClick={handleOpenModal}
            />
          ))}
        </div>

        {/* Global Expanded Lightbox Carousel Modal */}
        <CarouselModal
          modalState={modalState}
          onClose={handleCloseModal}
          onNavigate={handleNavigateModal}
        />
      </section>
      <PixelGridTransition inColor={outColor} outColor={inColor} />
    </>
  );
}

export default BeyondTheCode;
