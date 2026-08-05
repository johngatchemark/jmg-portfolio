import { useState, useRef, useEffect } from "react";
import Container from "../../../components/container";
import {
  Disc,
  Play,
  Pause,
  Music,
  Sparkles,
  Maximize2,
  X,
  ExternalLink,
  Gamepad2,
  Scissors,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface HobbyImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  subcaption?: string;
}

interface HobbyGallery {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  images: HobbyImage[];
}

const hobbyGalleries: HobbyGallery[] = [
  {
    id: "minecraft",
    title: "Playing Minecraft",
    category: "Gaming & Redstone Logic",
    icon: <Gamepad2 size={18} className="text-jm-primary" />,
    description:
      "Building cozy survival bases, intricate Redstone mechanisms, and aesthetic custom worlds. Minecraft bridges my passion for architectural design and logical engineering in an endless sandbox.",
    images: [
      {
        id: "mc-1",
        src: "/assets/hobbies/minecraft.jpg",
        alt: "Cozy Minecraft survival cabin with cherry blossom trees",
        caption: "Cherry Blossom Survival Base",
        subcaption:
          "Architectural build featuring warm lantern illumination, terraced crop gardens, and custom timber framing.",
      },
      {
        id: "mc-2",
        src: "/assets/hobbies/minecraft-2.jpg",
        alt: "Underground Redstone engineering laboratory",
        caption: "Redstone Automation & Logic Hub",
        subcaption:
          "Underground Redstone clockwork mechanism powering item sorters and automated farm yields.",
      },
      {
        id: "mc-3",
        src: "/assets/hobbies/minecraft.jpg",
        alt: "Detail shot of Minecraft custom build",
        caption: "Cozy Interior & Exterior Crafting Yard",
        subcaption:
          "Detailed view of the handcrafted balcony, storage chests, and natural landscape integration.",
      },
      {
        id: "mc-4",
        src: "/assets/hobbies/minecraft-2.jpg",
        alt: "Redstone wiring overview",
        caption: "Redstone Circuit & Repeater Array",
        subcaption:
          "High-density pulse generator and observer clock for automated villager trading halls.",
      },
    ],
  },
  {
    id: "fiber-arts",
    title: "Fiber Arts (Knitting & Crocheting)",
    category: "Tactile Crafting & Patterns",
    icon: <Scissors size={18} className="text-jm-purple dark:text-jm-accent" />,
    description:
      "Crafting handmade plushies, warm wearable garments, and intricate yarn blankets. Fiber arts are a comforting, tactile form of pattern execution—where every stitch is a loop of deliberate care.",
    images: [
      {
        id: "fa-1",
        src: "/assets/hobbies/fiber-arts.jpg",
        alt: "Pastel yarn skeins and knitting needles on wooden table",
        caption: "Pastel Stripe Knit Blanket & Tools",
        subcaption:
          "Hand-knitted pastel rainbow wool blanket paired with wooden circular needles and yarn skeins.",
      },
      {
        id: "fa-2",
        src: "/assets/hobbies/fiber-arts-2.jpg",
        alt: "Handmade crocheted amigurumi plushie animals",
        caption: "Handmade Amigurumi Plushies",
        subcaption:
          "Crocheted woodland creatures including a teddy bear, bunny, fox, owl, and tiny dinosaur.",
      },
      {
        id: "fa-3",
        src: "/assets/hobbies/fiber-arts.jpg",
        alt: "Yarn texture and stitch detail",
        caption: "Textured Stitch Pattern & Yarn Selection",
        subcaption:
          "Close-up of pastel wool yarn skeins selected for seasonal knitting and crochet projects.",
      },
      {
        id: "fa-4",
        src: "/assets/hobbies/fiber-arts-2.jpg",
        alt: "Crochet hook and yarn plushie ensemble",
        caption: "Amigurumi Ensemble & Craft Setup",
        subcaption:
          "Soft hand-stitched plushie lineup featuring customized color palettes and safety eyes.",
      },
    ],
  },
  {
    id: "oil-painting",
    title: "Oil Painting",
    category: "Fine Arts & Impressionism",
    icon: <Palette size={18} className="text-jm-secondary dark:text-jm-cyan" />,
    description:
      "Working with oil paints on canvas, layering rich impasto textures, and capturing scenic landscapes. Painting provides a peaceful outlet to experiment with natural light, color theory, and expression.",
    images: [
      {
        id: "op-1",
        src: "/assets/hobbies/oil-painting.jpg",
        alt: "Sunset landscape oil painting on studio easel",
        caption: "Impasto Sunset Coastline Landscape",
        subcaption:
          "Original oil painting on canvas capturing golden hour light breaking over rocky coastal cliffs.",
      },
      {
        id: "op-2",
        src: "/assets/hobbies/oil-painting-2.jpg",
        alt: "Macro close-up of impasto oil paint texture with palette knife",
        caption: "Palette Knife Impasto Texture Detail",
        subcaption:
          "Heavy impasto technique layering vibrant ultramarine, cadmium yellow, and deep crimson paint.",
      },
      {
        id: "op-3",
        src: "/assets/hobbies/oil-painting.jpg",
        alt: "Studio easel and paint setup",
        caption: "Artist Studio Easel & Color Palette",
        subcaption:
          "Studio workspace layout featuring oil color tubes, palette knives, and natural window lighting.",
      },
      {
        id: "op-4",
        src: "/assets/hobbies/oil-painting-2.jpg",
        alt: "Color blending on linen canvas",
        caption: "Vibrant Color Mixing & Canvas Texture",
        subcaption:
          "Detailed texture close-up showcasing expressive palette knife application and oil glaze.",
      },
    ],
  },
];

function BeyondTheCode() {
  const [isPlayingVinyl, setIsPlayingVinyl] = useState(true);

  // Modal State: holds the selected hobby and active image index inside the modal
  const [modalState, setModalState] = useState<{
    hobby: HobbyGallery;
    imageIndex: number;
  } | null>(null);

  // Scroll refs for carousels (attached directly to the scrollable div)
  const carouselRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll boundary state to disable navigation buttons when at ends
  const [scrollBounds, setScrollBounds] = useState<
    Record<string, { canScrollLeft: boolean; canScrollRight: boolean }>
  >({});

  const updateScrollBounds = (hobbyId: string) => {
    const el = carouselRefs.current[hobbyId];
    if (!el) return;
    const canScrollLeft = el.scrollLeft > 5;
    const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 5;
    setScrollBounds((prev) => ({
      ...prev,
      [hobbyId]: { canScrollLeft, canScrollRight },
    }));
  };

  useEffect(() => {
    hobbyGalleries.forEach((hobby) => {
      updateScrollBounds(hobby.id);
    });
  }, []);

  const scrollCarousel = (hobbyId: string, direction: "left" | "right") => {
    const el = carouselRefs.current[hobbyId];
    if (el) {
      const scrollAmount = el.clientWidth * 0.75;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(() => updateScrollBounds(hobbyId), 350);
    }
  };

  return (
    <section className="w-full max-w-full bg-[var(--color-jm-btc-bg)] border-y border-[var(--color-jm-btc-border)] py-16 transition-colors duration-500 overflow-x-hidden">
      <Container>
        <div className="flex flex-col justify-between items-stretch gap-10 max-w-120 lg:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-20">
          {/* Section Header */}
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

      {/* ========================================================================= */}
      {/* Apple-Style Boxy Retro Multi-Carousel Tracks (ONE CAROUSEL PER HOBBY) */}
      {/* ========================================================================= */}
      <div className="w-full flex flex-col gap-16 mt-8">
        {hobbyGalleries.map((hobby) => {
          const bounds = scrollBounds[hobby.id] || {
            canScrollLeft: false,
            canScrollRight: true,
          };

          return (
            <div key={hobby.id} className="w-full flex flex-col gap-4">
              {/* Hobby Header */}
              <Container>
                <div className="max-w-120 lg:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-20 flex flex-col gap-1 text-left">
                  <div className="flex items-center gap-2">
                    {hobby.icon}
                    <h3 className="text-jm-fg font-mono font-bold text-xl md:text-2xl tracking-tight">
                      {hobby.title}
                    </h3>
                  </div>
                  <p className="text-jm-muted-fg font-sans text-xs sm:text-sm max-w-2xl">
                    {hobby.description}
                  </p>
                </div>
              </Container>

              {/* Edge-to-Edge Full Viewport Scrollable Track Container */}
              <div
                ref={(el) => {
                  carouselRefs.current[hobby.id] = el;
                }}
                onScroll={() => updateScrollBounds(hobby.id)}
                className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-auto no-scrollbar py-2 scroll-smooth"
              >
                {/* Inner Track Padding-Left matches section header left margin exactly on all screen sizes (< lg and >= lg) */}
                <div className="flex items-stretch gap-6 sm:gap-8 w-max pl-[max(1.5rem,calc((100vw-30rem)/2+1.5rem))] sm:pl-[max(2.5rem,calc((100vw-30rem)/2+2.5rem))] lg:pl-[max(5rem,calc((100vw-72rem)/2+5rem))] pr-12 md:pr-24">
                  {hobby.images.map((img, imgIdx) => (
                    <div
                      key={img.id}
                      className="w-[82vw] max-w-[320px] sm:w-[460px] md:w-[460px] sm:max-w-[460px] flex-shrink-0 bg-white dark:bg-[#1a1924] border-2 border-jm-fg dark:border-jm-ui rounded-xs drop-shadow-[4px_4px_0px_var(--color-jm-primary)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] overflow-hidden flex flex-col justify-between group/wideCard cursor-pointer transition-all"
                      onClick={() =>
                        setModalState({
                          hobby,
                          imageIndex: imgIdx,
                        })
                      }
                    >
                      {/* Wide Format Image Header */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10 dark:bg-black/40 border-b-2 border-jm-fg dark:border-jm-ui">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover group-hover/wideCard:scale-105 transition-transform duration-500"
                        />

                        {/* Hover Overlay with Refined Dark Mode Contrast */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/wideCard:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <span className="text-white font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 bg-black/90 dark:bg-[#16151e] px-4 py-2 rounded-xs border border-white/40 dark:border-jm-primary shadow-lg">
                            <Maximize2 size={15} /> Click to enlarge
                          </span>
                        </div>

                        {/* Photo Index Badge */}
                        <div className="absolute top-4 left-4 bg-white dark:bg-[#16151e] px-3 py-1 rounded-xs border border-jm-fg dark:border-jm-ui font-mono text-xs font-bold text-jm-fg shadow-xs">
                          {imgIdx + 1} of {hobby.images.length}
                        </div>
                      </div>

                      {/* Single Paragraph Caption & Subcaption (2 lines max with truncation) */}
                      <div className="p-4 sm:p-5 text-left bg-white dark:bg-[#1a1924] flex-1 justify-start">
                        <p className="font-sans text-xs text-jm-fg leading-relaxed line-clamp-2">
                          <span className="font-mono font-bold text-jm-fg">
                            {img.caption}.{" "}
                          </span>
                          {img.subcaption && (
                            <span className="text-jm-muted-fg">
                              {img.subcaption}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retro Arrow Controls with Disabled Bounds State */}
              <Container>
                <div className="max-w-120 lg:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-20 flex items-center justify-between pt-1">
                  <span className="font-mono text-xs text-jm-muted-fg">
                    {hobby.images.length} photos in gallery — Scroll right
                    &rarr;
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => scrollCarousel(hobby.id, "left")}
                      disabled={!bounds.canScrollLeft}
                      title={`Scroll ${hobby.title} left`}
                      className={`bg-white dark:bg-[#1a1924] border-2 border-jm-fg dark:border-jm-ui text-jm-fg p-2 rounded-xs shadow-[2px_2px_0px_var(--color-jm-primary)] transition-all ${
                        !bounds.canScrollLeft
                          ? "opacity-30 cursor-not-allowed shadow-none border-jm-ui text-jm-muted-fg"
                          : "hover:bg-jm-primary hover:text-white dark:hover:text-[#003820] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                      }`}
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      onClick={() => scrollCarousel(hobby.id, "right")}
                      disabled={!bounds.canScrollRight}
                      title={`Scroll ${hobby.title} right`}
                      className={`bg-white dark:bg-[#1a1924] border-2 border-jm-fg dark:border-jm-ui text-jm-fg p-2 rounded-xs shadow-[2px_2px_0px_var(--color-jm-primary)] transition-all ${
                        !bounds.canScrollRight
                          ? "opacity-30 cursor-not-allowed shadow-none border-jm-ui text-jm-muted-fg"
                          : "hover:bg-jm-primary hover:text-white dark:hover:text-[#003820] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                      }`}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* Music Player Section with Vinyl Aesthetic */}
      {/* ========================================================================= */}
      <Container>
        <div className="max-w-120 lg:max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-20 mt-12">
          <div className="bg-white dark:bg-[#1a1924] border-2 border-jm-fg dark:border-jm-ui/80 rounded-xs p-6 lg:p-8 drop-shadow-[4px_4px_0px_var(--color-jm-primary)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] flex flex-col xl:flex-row w-full items-center justify-between gap-8 transition-all">
            {/* Vinyl Record Visual */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="relative group">
                {/* Vinyl Disc */}
                <div
                  className={`w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-[#0d0d12] relative flex items-center justify-center shadow-2xl border-4 border-[#22212c] ${
                    isPlayingVinyl
                      ? "animate-vinyl-spin"
                      : "animate-vinyl-spin animate-vinyl-spin-paused"
                  }`}
                >
                  {/* Concentric Vinyl Grooves */}
                  <div className="absolute inset-2 rounded-full border border-white/10" />
                  <div className="absolute inset-5 rounded-full border border-white/5" />
                  <div className="absolute inset-8 rounded-full border border-white/10" />
                  <div className="absolute inset-11 rounded-full border border-white/5" />
                  <div className="absolute inset-14 rounded-full border border-white/10" />

                  {/* Record Center Label */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-[#ffb000] bg-gradient-to-br from-[#0a6b42] to-[#005d7a] flex flex-col items-center justify-center text-center p-1 shadow-inner relative z-10">
                    <Music
                      size={16}
                      className="text-white mb-0.5 animate-pulse"
                    />
                    <span className="font-mono text-[8px] text-white font-bold tracking-tight">
                      JMG VINYL
                    </span>
                  </div>

                  {/* Center Hole */}
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-[var(--color-jm-btc-bg)] border border-black/40 z-20" />
                </div>

                {/* Play / Pause Toggle Floating Button */}
                <button
                  onClick={() => setIsPlayingVinyl(!isPlayingVinyl)}
                  title={isPlayingVinyl ? "Pause Vinyl Rotation" : "Spin Vinyl"}
                  className="absolute -bottom-2 -right-2 bg-jm-primary text-white dark:text-[#003820] p-2.5 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer border border-white dark:border-jm-primary"
                >
                  {isPlayingVinyl ? (
                    <Pause size={16} />
                  ) : (
                    <Play size={16} className="ml-0.5" />
                  )}
                </button>
              </div>

              {/* Vinyl Info Text */}
              <div className="flex flex-col text-center sm:text-left gap-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Disc
                    size={18}
                    className={`text-jm-primary ${isPlayingVinyl ? "animate-spin" : ""}`}
                  />
                  <span className="font-mono text-xs text-jm-primary font-bold uppercase tracking-wider">
                    {isPlayingVinyl ? "NOW SPINNING" : "PAUSED"}
                  </span>
                </div>
                <h4 className="font-sans font-bold text-lg text-jm-fg">
                  Coding & Crafting Soundtrack
                </h4>
                <p className="font-sans text-xs text-jm-muted-fg max-w-xs">
                  Lo-Fi, Instrumental & Ambient tunes that fuel deep focus and
                  creative flow.
                </p>
                <a
                  href="https://music.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-jm-primary hover:underline flex items-center justify-center sm:justify-start gap-1 mt-1 font-semibold"
                >
                  <span>Listen on Apple Music</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Apple Music Embed Iframe Container */}
            <div className="w-full xl:w-1/2 rounded-xs overflow-hidden border-2 border-jm-fg dark:border-jm-ui bg-black/5 dark:bg-black/30 p-1">
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="175"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "4px",
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/lo-fi-beats/1536640960"
                title="Apple Music Embed Player"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* LARGE FULL-SCREEN / EXPANDED MODAL CAROUSEL */}
      {/* On mobile: takes up whole screen (inset-0 w-full h-full rounded-none) */}
      {/* On desktop: large centered dialog with full slide controls */}
      {/* ========================================================================= */}
      {modalState && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-6"
          onClick={() => setModalState(null)}
        >
          <div
            className="relative bg-white dark:bg-[#1a1924] border-0 sm:border-2 border-jm-fg dark:border-jm-ui w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-5xl rounded-none sm:rounded-xs overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-jm-fg dark:border-jm-ui bg-white/50 dark:bg-black/40">
              <div className="flex items-center gap-3">
                {modalState.hobby.icon}
                <div className="flex flex-col text-left">
                  <h3 className="font-mono font-bold text-base sm:text-lg text-jm-fg">
                    {modalState.hobby.title}
                  </h3>
                  <span className="font-mono text-xs text-jm-primary font-semibold">
                    Image {modalState.imageIndex + 1} of{" "}
                    {modalState.hobby.images.length} —{" "}
                    {modalState.hobby.images[modalState.imageIndex].caption}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setModalState(null)}
                className="p-2 rounded-xs bg-black/10 dark:bg-white/10 text-jm-fg hover:bg-jm-primary hover:text-white transition-colors cursor-pointer border border-jm-fg dark:border-jm-ui"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Carousel Viewer Body */}
            <div className="relative flex-1 bg-black/95 flex items-center justify-center overflow-hidden p-2 sm:p-4 min-h-[300px]">
              <img
                src={modalState.hobby.images[modalState.imageIndex].src}
                alt={modalState.hobby.images[modalState.imageIndex].alt}
                className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain transition-all duration-300"
              />

              {/* Modal Carousel Arrow Navigation */}
              {modalState.hobby.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setModalState((prev) =>
                        prev
                          ? {
                              ...prev,
                              imageIndex:
                                prev.imageIndex === 0
                                  ? prev.hobby.images.length - 1
                                  : prev.imageIndex - 1,
                            }
                          : null,
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jm-primary text-white p-3 rounded-xs border border-white/40 transition-transform hover:scale-110 cursor-pointer shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={() =>
                      setModalState((prev) =>
                        prev
                          ? {
                              ...prev,
                              imageIndex:
                                prev.imageIndex === prev.hobby.images.length - 1
                                  ? 0
                                  : prev.imageIndex + 1,
                            }
                          : null,
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-jm-primary text-white p-3 rounded-xs border border-white/40 transition-transform hover:scale-110 cursor-pointer shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Modal Subcaption Footer */}
            <div className="p-4 sm:p-6 bg-white dark:bg-[#1a1924] border-t-2 border-jm-fg dark:border-jm-ui text-left">
              <p className="text-jm-fg font-sans text-xs sm:text-sm leading-relaxed">
                <span className="font-mono font-bold">
                  {modalState.hobby.images[modalState.imageIndex].caption}.{" "}
                </span>
                {modalState.hobby.images[modalState.imageIndex].subcaption ||
                  modalState.hobby.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default BeyondTheCode;
