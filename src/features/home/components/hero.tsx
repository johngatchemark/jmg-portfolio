import { useEffect, useRef, useState } from "react";
import { useHeader } from "../../../context/header-context";
import { EffectScene } from "./hero-spinning-3d-face/effect-scene";
import {
  CameraControlsHud,
  type CameraConfig,
} from "./hero-spinning-3d-face/camera-controls-hud";
import { FileText, ArrowDown, Play, Pause } from "lucide-react";
import { IconFacebook, IconGitHub, IconLinkedIn } from "./icons";
import { useTheme } from "../../../context/theme-context";
import Badge from "../../../components/badge";
import ErrorBoundary from "../../../components/error-boundary";

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

const DEFAULT_CAMERA_CONFIG: CameraConfig = {
  x: -9.2,
  y: 0,
  z: 59.5,
  zoom: 2.15,
};

function Hero() {
  const { headerHeight, setIsHeroResumeVisible } = useHeader();
  const currentHeaderHeight = headerHeight ? `${headerHeight}px` : "0px";
  const { resolvedTheme } = useTheme();
  const resumeBtnRef = useRef<HTMLAnchorElement>(null);
  const [isModelPaused, setIsModelPaused] = useState(false);

  // FOR DEBUGGING PURPOSES ONLY
  // const [cameraConfig, setCameraConfig] = useState<CameraConfig>(
  //   DEFAULT_CAMERA_CONFIG,
  // );

  const cameraConfig = DEFAULT_CAMERA_CONFIG;

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
        <ErrorBoundary fallback={null}>
          <EffectScene
            className="h-full"
            isPaused={isModelPaused}
            cameraPosition={[cameraConfig.x, cameraConfig.y, cameraConfig.z]}
            cameraZoom={cameraConfig.zoom}
            tintColor={resolvedTheme === "light" ? "#000000" : "#ffffff"}
            backgroundColor={resolvedTheme === "light" ? offWhite : offBlack}
          />
        </ErrorBoundary>
      </div>

      {/* Temporary Camera Controls HUD */}
      {/* FOR DEBUGGING PURPOSES ONLY */}
      {/* <CameraControlsHud
        config={cameraConfig}
        onChange={setCameraConfig}
        defaultConfig={DEFAULT_CAMERA_CONFIG}
      /> */}

      {/* 3D Animation Pause / Play Toggle (Bottom Right) */}
      <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 z-30 flex items-center">
        <RaisedButton
          color="bg"
          borderColor="fg"
          darkBorderColor="ui"
          darkHoverBorderColor="primary"
          textColor="fg"
          dropShadowColor="fg"
          hoverColor="#e4e4dd"
          darkHoverColor="#1e1f29"
          onClick={() => setIsModelPaused((prev) => !prev)}
          aria-label={
            isModelPaused ? "Resume 3D Model Spin" : "Pause 3D Model Spin"
          }
          title={isModelPaused ? "Resume 3D Model Spin" : "Pause 3D Model Spin"}
          className="p-2! min-w-0"
        >
          {isModelPaused ? (
            <Play size={16} className="text-jm-green fill-current" />
          ) : (
            <Pause size={16} className="text-jm-green fill-current" />
          )}
        </RaisedButton>
      </div>

      <div className="relative z-20 flex flex-col justify-center gap-4 max-w-120 lg:max-w-6xl lg:w-full mx-5 lg:mx-0 lg:px-20">
        <h1 className="h1-stretched text-fg! text-left my-0! leading-none">
          Hi, I'm
          <br />
          <span className="text-jm-green">John Mark Gatche</span>
        </h1>

        <h2 className="text-[22px]! font-medium text-jm-muted-fg! text-left mb-0! tracking-wide">
          Aspiring Software Engineer&nbsp;
        </h2>

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

        <div className="flex items-center gap-4 flex-wrap">
          <a
            ref={resumeBtnRef}
            href="/Gatche_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-block"
          >
            <RaisedButton
              color="primary"
              borderColor="fg"
              darkBorderColor="ui"
              textColor="bg"
              darkTextColor="#003820"
              dropShadowColor="fg"
              hoverColor="#074e30"
              darkHoverColor="#3df0a8"
            >
              <FileText size={18} />
              View CV
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
                  darkHoverBorderColor="primary"
                  textColor="fg"
                  dropShadowColor="fg"
                  hoverColor="#e4e4dd"
                  darkHoverColor="#1e1f29"
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
