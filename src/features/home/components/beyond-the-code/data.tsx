import { Scissors, Palette } from "lucide-react";
import type { CarouselGallery } from "../../../../components/carousel";

export const hobbyGalleries: CarouselGallery[] = [
  {
    id: "fiber-arts",
    title: "Fiber Arts (Knit & Crochet)",
    category: "Tactile Crafting & Patterns",
    icon: <Scissors size={18} className="text-jm-purple dark:text-jm-accent" />,
    description: `So there was this time I badly wanted a turtleneck sweater, but the ones at the local shop (I thought) were overpriced. 
          So I figured, why not just knit one myself? Soon enough, I realized that buying decent-quality yarn was more expensive, and spending weeks, if not months, on a largely repetitive project might have been more trouble than it was worth.
          But the thought of wearing my creations already brewed in my mind, and there was nothing I could do to stop it.`,
    images: [
      {
        id: "fa-1",
        src: "/assets/hobbies/fiber-arts/sweater-raglan.webp",
        alt: "Photo of myself wearing a cream-colored sweater called Raglan Sweater #1",
        caption: "Raglan Sweater #1",
        subcaption:
          "For my first knitted project, I jumped straight into a sweater. But since it was my first time, I was very meticulous about the measurements—I did a lot of math to make sure I got them right. Raglan Sweater #1 is knitted in the round and follows a seamless construction. Pattern is made by Florence Miller and can be had on [Ravelry](https://www.ravelry.com/patterns/library/step-by-step-sweater).",
      },
      {
        id: "fa-2",
        src: "/assets/hobbies/fiber-arts/sweater-raglan-ribbed.webp",
        alt: "Photo of a red sweater I made called Raglan Sweater #2 laid out on the floor",
        caption: "Raglan Sweater #2",
        subcaption:
          "This sweater follows the exact same construction as Raglan Sweater #1, except tighter, and I went for a ribbed k1p1 pattern instead of the regular knit construction.",
      },
      {
        id: "fa-3",
        src: "/assets/hobbies/fiber-arts/beanie.webp",
        alt: "Photo of a white variegated beanie laid out on the floor",
        caption: "White Variegated Beanie",
        subcaption:
          "Up until this point, I had been knitting in the round, so this was my first go at knitting flat in pieces (and first time seaming!). Turns out, I found the activity of seaming to be therapeutic. Check out the [pattern by KnittingHouseSquare](https://www.knittinghousesquare.com/head/ribbed-beanie-knit-flat)!",
      },
      {
        id: "fa-4",
        src: "/assets/hobbies/fiber-arts/bucket-hat.webp",
        alt: "Photo of myself wearing a green daisy bucket hat",
        caption: "Daisy Bucket Hat",
        subcaption:
          "My first crochet item! Following crochet tutorials on YouTube as a left-hander was a real mind-bender. Most tutorials call for a right-handed flow. With knitting, I was able to get used to the right-handed way without much difficulty, but I just couldn't do the same for crochet. So what I did was download the video and flip it. Pattern is by Yawning Yarning Crochet and can be watched [here](https://www.youtube.com/watch?v=T1IBjMd_Z9I).",
      },
      {
        id: "fa-5",
        src: "/assets/hobbies/fiber-arts/bucket-hat-beanie.webp",
        alt: "Photo of myself wearing a white variegated beanie with a brim-less daisy bucket hat worn over it",
        caption: "Bucket Hat-Beanie",
        subcaption:
          "This is my WIP (brim-less) daisy bucket hat worn over my white variegated beanie XD",
      },
      {
        id: "fa-6",
        src: "/assets/hobbies/fiber-arts/sweater-ransom.webp",
        alt: "Photo of a white cabled sweater called The Handsome Chris Pullover laid out on the floor, ends unweaved",
        caption: "The Handsome Chris Pullover",
        subcaption:
          "My best FO yet—the iconic [Handsome Chris Pullover by Caryn Shaffer](https://www.ravelry.com/patterns/library/the-handsome-chris-pullover). This sweater took me around two months. Near the end, I ran out of white yarn, so I used the ball of yellow ochre yarn I had left from another FO and knitted the few remaining rows. Now it looks like there's this weird gold accent around the armholes—but I say this makes the sweater unique.",
      },
      {
        id: "fa-7",
        src: "/assets/hobbies/fiber-arts/sweater-ransom-2.webp",
        alt: "Photo of myself wearing a white cabled sweater called The Handsome Chris Pullover",
        caption: "The Handsome Chris Pullover (worn)",
        subcaption:
          "Me with the Ransom sweater on while Knives Out (2019) plays in the background.",
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
        src: "/assets/hobbies/fine-arts/graham-coxon-2026.webp",
        alt: "Realistic oil painting of Graham Coxon",
        caption: "Graham Coxon (2026)",
        subcaption: "Oil on canvas.",
      },
      {
        id: "op-2",
        src: "/assets/hobbies/fine-arts/pink-toy-2025.webp",
        alt: "Realistic colored pencil drawing of a cute pink toy",
        caption: "Pink Toy (2025)",
        subcaption: "Colored pencils.",
      },
      {
        id: "op-3",
        src: "/assets/hobbies/fine-arts/jamie-ferrer-2025.webp",
        alt: "Realistic oil painting of my dear friend Jamie",
        caption: "Jamie (2025)",
        subcaption: "Oil on canvas (Also my very first oil painting!).",
      },
      {
        id: "op-4",
        src: "/assets/hobbies/fine-arts/dday-lewis-3-2024.webp",
        alt: "Realistic colored pencil drawing of Daniel Day-Lewis",
        caption: "Daniel Day-Lewis (2024)",
        subcaption: "Colored pencils.",
      },
      {
        id: "op-5",
        src: "/assets/hobbies/fine-arts/kt-sugiyama-2023.webp",
        alt: "Realistic colored pencil drawing of Kiyotaka Sugiyama",
        caption: "Kiyotaka Sugiyama (2023)",
        subcaption: "Colored pencils.",
      },
      {
        id: "op-6",
        src: "/assets/hobbies/fine-arts/gummy-bear-2023.webp",
        alt: "Realistic colored pencil drawing of a green gummy bear",
        caption: "Gummy Bear (2023)",
        subcaption: "Colored pencils.",
      },
      {
        id: "op-7",
        src: "/assets/hobbies/fine-arts/kim-novak-2022.webp",
        alt: "Realistic colored pencil drawing of Kim Novak with crumpled paper effect",
        caption: "Kim Novak (2022)",
        subcaption: "Colored pencils.",
      },
      {
        id: "op-8",
        src: "/assets/hobbies/fine-arts/make-it-pop-2022.webp",
        alt: "Colored pencil render of the text 'Make it Pop' with cartoon doodles around it",
        caption: "Make It Pop (2022)",
        subcaption: "Colored pencils.",
      },
      {
        id: "op-9",
        src: "/assets/hobbies/fine-arts/kim-novak-2021.webp",
        alt: "Realistic colored pencil drawing of Kim Novak in black fur coat at a flower shop",
        caption: "Kim Novak (2021)",
        subcaption: "Colored pencils.",
      },
      {
        id: "op-10",
        src: "/assets/hobbies/fine-arts/donut-2021.webp",
        alt: "Acrylic on wood painting of donut in front of a magenta-blue background",
        caption: "Donut (2021)",
        subcaption: "Acrylic on wood.",
      },
      {
        id: "op-11",
        src: "/assets/hobbies/fine-arts/me-2016.webp",
        alt: "Colored pencil drawing of myself",
        caption: "Me (2016)",
        subcaption: "Colored pencils.",
      },
    ],
  },
  // {
  //   id: "minecraft",
  //   title: "Minecraft Redstone",
  //   category: "Gaming & Redstone Logic",
  //   icon: <Gamepad2 size={18} className="text-jm-primary" />,
  //   description: `There was a time, when I was a very young kid back in 2012, when all I could think about was rollercoasters.
  //     They were all over my Google and YouTube search histories.
  //     I'd been dying to build one, until one day, I stumbled across one random YouTube video of a character riding through the ups and downs of a particularly blocky railway—like a coaster!
  //     This newfound discovery prompted me to download the free trial version of said game, ready to build my first loop-the-loop.
  //     Much to my dismay, I was greeted by a horde of zombies and exploding creepers on the first night—and I quickly realized that rails can't be placed upside down.`,
  //   images: [
  //     {
  //       id: "mc-1",
  //       src: "/assets/hobbies/minecraft.jpg",
  //       alt: "Cozy Minecraft survival cabin with cherry blossom trees",
  //       caption: "Cherry Blossom Survival Base",
  //       subcaption: "daskdjdkas",
  //     },
  //     {
  //       id: "mc-2",
  //       src: "/assets/hobbies/minecraft-2.jpg",
  //       alt: "Underground Redstone engineering laboratory",
  //       caption: "Redstone Automation & Logic Hub",
  //       subcaption:
  //         "Underground Redstone clockwork mechanism powering item sorters and automated farm yields.",
  //     },
  //     {
  //       id: "mc-3",
  //       src: "/assets/hobbies/minecraft.jpg",
  //       alt: "Detail shot of Minecraft custom build",
  //       caption: "Cozy Interior & Exterior Crafting Yard",
  //       subcaption:
  //         "Detailed view of the handcrafted balcony, storage chests, and natural landscape integration.",
  //     },
  //     {
  //       id: "mc-4",
  //       src: "/assets/hobbies/minecraft-2.jpg",
  //       alt: "Redstone wiring overview",
  //       caption: "Redstone Circuit & Repeater Array",
  //       subcaption:
  //         "High-density pulse generator and observer clock for automated villager trading halls.",
  //     },
  //   ],
  // },
];
