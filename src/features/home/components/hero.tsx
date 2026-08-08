import { useEffect, useRef } from "react";
import { useHeader } from "../../../context/header-context";
import { EffectScene } from "./hero-spinning-3d-face/effect-scene";
import { FileText, ArrowDown } from "lucide-react";
import { IconFacebook, IconGitHub, IconLinkedIn } from "./icons";
import { useTheme } from "../../../context/theme-context";
import Badge from "../../../components/badge";

import RaisedButton from "../../../components/raised-button";

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

const headlineAchievements = [
  "BSCS Summa Cum Laude",
  "Hackathon Champion",
  "IEEE-published Researcher",
  "DOST-SEI Scholar",
];

function Hero() {
  const { headerHeight, setIsHeroResumeVisible } = useHeader();
  const currentHeaderHeight = headerHeight ? `${headerHeight}px` : "0px";
  const { resolvedTheme } = useTheme();
  const resumeBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = resumeBtnRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroResumeVisible(entry.isIntersecting);
      },
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0,
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      setIsHeroResumeVisible(false);
    };
  }, [headerHeight, setIsHeroResumeVisible]);

  // const styles = getComputedStyle(document.documentElement);
  const offWhite = "#f5f5f0";
  const offBlack = "#0a0a0d";

  return (
    <main
      className="flex flex-row w-screen justify-center relative overflow-hidden"
      style={{ height: `calc(100vh - ${currentHeaderHeight})` }}
    >
      {/* 3D spinning JM */}
      <div className="w-screen h-full absolute left-0 top-0">
        <div className="w-full h-full absolute z-10 bg-jm-bg/85" />
        <EffectScene
          enableZoom={false}
          className="h-full"
          tintColor={resolvedTheme === "light" ? "#000000" : "#ffffff"}
          backgroundColor={resolvedTheme === "light" ? offWhite : offBlack}
        />
      </div>

      <div className="relative z-20 flex flex-col justify-center gap-4 max-w-120 lg:max-w-6xl lg:w-full mx-5 lg:mx-0 lg:px-20">
        <p className="text-left text-[12px]! text-sm font-mono text-jm-green tracking-widest mb-1">
          &gt; sys.whoami()
        </p>

        <h1 className="h1-stretched text-fg! text-left my-0! leading-none">
          Hi, I'm
          <br />
          <span className="text-jm-green">John Mark Gatche</span>
        </h1>

        <h2 className="text-[22px]! font-medium text-jm-muted-fg! text-left mb-0! tracking-wide">
          Aspiring Software Engineer&nbsp;
          <span className="text-jm-green">&amp;</span>
          &nbsp;Web Developer
        </h2>

        {/* <p className="text-left text-black/60 dark:text-white/60 text-base max-w-lg mt-2 leading-relaxed font-sans">
          BS CS Summa Cum Laude · Hackathon Champion · IEEE-published Researcher
          · DOST-SEI Scholar
        </p> */}
        <div className="flex flex-wrap gap-2 max-w-100 lg:max-w-full">
          {headlineAchievements.map((achievement, index) => (
            <Badge
              key={index}
              text={achievement}
              color="bg"
              borderColor="ui"
              textColor="fg"
              dropShadowColor="ui"
            />
          ))}
        </div>

        {/* <div className="w-16 h-px bg-indigo-800 dark:bg-indigo-400 mt-4 mb-5" /> */}

        <div className="flex items-center gap-4 flex-wrap">
          <a
            ref={resumeBtnRef}
            href="/Gatche_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-block"
          >
            <RaisedButton
              color="primary"
              borderColor="primary"
              textColor="bg"
              darkTextColor="#003820"
              dropShadowColor="fg"
              hoverColor="#074e30"
              darkHoverColor="#3df0a8"
            >
              <FileText size={18} />
              View Resume
            </RaisedButton>
          </a>

          <div className="flex flex-wrap items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="no-underline inline-block"
              >
                <RaisedButton
                  color="bg"
                  borderColor="fg"
                  darkBorderColor="ui"
                  textColor="fg"
                  dropShadowColor="fg"
                  hoverColor="#e4e4dd"
                  darkHoverColor="#1e1f29"
                  className="transition-none!"
                >
                  <span className="hidden md:inline">{label}</span>
                  <Icon size={18} />
                </RaisedButton>
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
