import { useState } from "react";
import Container from "../../../components/container";
import { Sparkles } from "lucide-react";
import {
  CarouselTrack,
  CarouselModal,
  type CarouselGallery,
  type CarouselModalState,
} from "../../../components/carousel";
import VinylPlayer from "./beyond-the-code/vinyl-player";
import { hobbyGalleries } from "./beyond-the-code/data";

function BeyondTheCode() {
  const [modalState, setModalState] = useState<CarouselModalState | null>(null);

  const handleOpenModal = (gallery: CarouselGallery, imageIndex: number) => {
    setModalState({ gallery, imageIndex });
  };

  const handleCloseModal = () => {
    setModalState(null);
  };

  const handleNavigateModal = (imageIndex: number) => {
    setModalState((prev) => (prev ? { ...prev, imageIndex } : null));
  };

  return (
    <section className="w-full max-w-full bg-[var(--color-jm-btc-bg)] border-y border-[var(--color-jm-btc-border)] py-16 transition-colors duration-500 overflow-x-hidden">
      {/* Section Title Header */}
      <Container>
        <div className="flex flex-col justify-between items-stretch gap-10 max-w-120 lg:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col gap-3 text-left w-full max-w-3xl">
            <div className="flex items-center gap-2">
              <p className="text-[12px]! text-sm font-mono text-jm-green tracking-widest">
                &gt; sys.beyondthecode()
              </p>
              <Sparkles size={14} className="text-jm-primary animate-pulse" />
            </div>

            <h2 className="text-jm-fg h1-stretched m-0! text-left">
              Beyond the Code
            </h2>

            <p className="text-jm-muted-fg text-left text-base leading-relaxed font-sans">
              When I step away from the IDE and terminal, I recharge through
              creative crafts, world-building, and hands-on art. Whether
              constructing Redstone architecture in Minecraft, weaving yarn
              loop-by-loop, or laying impasto oil paint on canvas, these
              passions keep my mind curious, grounded, and inspired.
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

      {/* Feature-Local Vinyl Player Soundtrack Widget */}
      <Container>
        <div className="max-w-120 lg:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-20 mt-12">
          <VinylPlayer />
        </div>
      </Container>

      {/* Global Expanded Lightbox Carousel Modal */}
      <CarouselModal
        modalState={modalState}
        onClose={handleCloseModal}
        onNavigate={handleNavigateModal}
      />
    </section>
  );
}

export default BeyondTheCode;
