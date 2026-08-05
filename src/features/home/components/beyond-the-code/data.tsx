import { Gamepad2, Scissors, Palette } from "lucide-react";
import type { CarouselGallery } from "../../../../components/carousel";

export const hobbyGalleries: CarouselGallery[] = [
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
