import { Gamepad2, Scissors, Palette } from "lucide-react";
import type { CarouselGallery } from "../../../../components/carousel";

export const hobbyGalleries: CarouselGallery[] = [
  {
    id: "minecraft",
    title: "Playing Minecraft",
    category: "Gaming & Redstone Logic",
    icon: <Gamepad2 size={18} className="text-jm-primary" />,
    description: `There was a time, when I was a very young kid back in 2012, when all I could think about was rollercoasters. 
      They were all over my Google and YouTube search histories. 
      I'd been dying to build one, until one day, I stumbled across one random YouTube video of a character riding through the ups and downs of a particularly blocky railway—like a coaster! 
      This newfound discovery prompted me to download the free trial version of said game, ready to build my first loop-the-loop.
      Much to my dismay, I was greeted by a horde of zombies and exploding creepers on the first night—and I quickly realized that rails can't be placed upside down.`,
    images: [
      {
        id: "mc-1",
        src: "/assets/hobbies/minecraft.jpg",
        alt: "Cozy Minecraft survival cabin with cherry blossom trees",
        caption: "Cherry Blossom Survival Base",
        subcaption: "daskdjdkas",
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
    title: "Fiber Arts (Knit & Crochet)",
    category: "Tactile Crafting & Patterns",
    icon: <Scissors size={18} className="text-jm-purple dark:text-jm-accent" />,
    description: `So there was this time I badly wanted a turtleneck sweater, but the ones at the local shop I thought were overpriced. 
          So I figured, why not knit one myself? Soon enough, I discovered that acquiring—at the very least—decent-quality yarn was more expensive, and spending weeks, if not months, on a largely repetitive project might have been more trouble than it was worth.
          Fortunately, the idea of endless possibilities and getting to wear my creations already sold me on handknitting.`,
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
    id: "fine-art",
    title: "[Fine] Art",
    category: "Fine Arts & Impressionism",
    icon: <Palette size={18} className="text-jm-secondary dark:text-jm-cyan" />,
    description: `I've been drawing (mostly random objects) since I was five, but I stopped doing it at some point because of personal stuff.
    I've always considered myself an artist, so to abruptly stop making art and observe my skills slowly decline as a result was disconcerting. 
    It took a while, but I eventually rediscovered my passion.
    Colored pencils and oil paints are my go-to mediums for making art, usually realistic drawings, but I am also teaching myself animation and drawing cartoons. 
    I still have a long way to go, but it's been a wonderful journey thus far.`,
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
