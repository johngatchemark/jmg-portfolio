import { useHeader } from "../../../context/header-context";
import { EffectScene } from "./hero-spinning-3d-face/effect-scene";
import { FileText, ArrowDown } from "lucide-react";
import "./hero.css";
import { IconFacebook, IconGitHub, IconLinkedIn } from "./icons";
import { useTheme } from "../../../context/theme-context";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/johngatchemark",
    icon: IconGitHub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/johnmarkgatche",
    icon: IconLinkedIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/johnmark.552757/",
    icon: IconFacebook,
  },
];

function Hero() {
  const { headerHeight } = useHeader();
  const currentHeaderHeight = headerHeight ? `${headerHeight}px` : "0px";
  const { resolvedTheme } = useTheme();
  const styles = getComputedStyle(document.documentElement);
  const offWhite = styles.getPropertyValue("--color-off-white").trim();
  const offBlack = styles.getPropertyValue("--color-off-black").trim();

  return (
    <main
      className="flex flex-row w-screen justify-center relative overflow-hidden"
      style={{ height: `calc(100vh - ${currentHeaderHeight})` }}
    >
      {/* 3D spinning JM */}
      <div className="w-screen h-full absolute left-0 top-0">
        <div className="w-full h-full absolute z-10 bg-off-white/85 dark:bg-off-black/85" />
        <EffectScene
          enableZoom={false}
          className="h-full"
          tintColor={resolvedTheme === "light" ? "#000000" : "#ffffff"}
          backgroundColor={resolvedTheme === "light" ? offWhite : offBlack}
        />
      </div>

      <div className="relative z-20 flex flex-col justify-center px-8 max-w-6xl w-full gap-2">
        <p className="text-left text-base font-mono text-indigo-800 dark:text-indigo-400 tracking-widest uppercase mb-1">
          &gt; sys.whoami()
        </p>

        <h1 className="h1-stretched text-black dark:text-white! text-left my-0! leading-none">
          I'm John Mark Gatche
        </h1>

        <h2 className="text-black/80! dark:text-white/80! text-left mb-0! mt-1! font-light tracking-wide">
          Aspiring Software Engineer&nbsp;
          <span className="text-indigo-800 dark:text-indigo-400 font-mono">
            &amp;
          </span>
          &nbsp;Web Developer
        </h2>

        <p className="text-left text-black/60 dark:text-white/60 text-base max-w-lg mt-2 leading-relaxed font-sans">
          BS CS Summa Cum Laude · Hackathon Champion · IEEE-published Researcher
          · DOST-SEI Scholar
        </p>

        <div className="w-16 h-px bg-indigo-800 dark:bg-indigo-400 mt-4 mb-5" />

        <div className="flex flex-row items-center gap-4 flex-wrap">
          <a
            href="/Gatche_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full text-indigo-800 dark:text-indigo-400 border-2 border-indigo-800 dark:border-indigo-500 w-fit text-sm font-mono py-2 px-5 hover:bg-indigo-800 dark:hover:bg-indigo-500 hover:text-white transition-all duration-200"
          >
            <FileText size={16} />
            Resume
          </a>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-black/60 dark:border-white/20 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:border-indigo-400 hover:bg-indigo-500/50 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2 text-black/60 dark:text-white/30 text-xs font-mono animate-bounce">
          <ArrowDown size={14} />
          scroll to explore
        </div>
      </div>
    </main>
  );
}

export default Hero;
