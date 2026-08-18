import { useState } from "react";
import { Disc, Play, Pause, Music, ExternalLink } from "lucide-react";

interface VinylPlayerProps {
  title?: string;
  subtitle?: string;
  embedUrl?: string;
  appleMusicUrl?: string;
  className?: string;
}

function VinylPlayer({
  title = "Coding & Crafting Soundtrack",
  subtitle = "Lo-Fi, Instrumental & Ambient tunes that fuel deep focus and creative flow.",
  embedUrl = "https://embed.music.apple.com/us/album/lo-fi-beats/1536640960",
  appleMusicUrl = "https://music.apple.com",
  className = "",
}: VinylPlayerProps) {
  const [isPlayingVinyl, setIsPlayingVinyl] = useState(true);

  return (
    <div
      className={`bg-white dark:bg-[#1a1924] border-2 border-jm-fg dark:border-jm-ui/80 rounded-xs p-6 lg:p-8 drop-shadow-[4px_4px_0px_var(--color-jm-primary)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] flex flex-col xl:flex-row w-full items-center justify-between gap-8 transition-all ${className}`}
    >
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
              <Music size={16} className="text-white mb-0.5 animate-pulse" />
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
            className="absolute -bottom-2 -right-2 bg-jm-primary text-white dark:text-[#003820] p-2.5 rounded-full shadow-lg active:top-[-6px] active:right-[-6px] cursor-pointer border border-white dark:border-jm-primary"
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
          <h4 className="font-sans font-bold text-lg text-jm-fg">{title}</h4>
          <p className="font-sans text-xs text-jm-muted-fg max-w-xs">
            {subtitle}
          </p>
          <a
            href={appleMusicUrl}
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
          src={embedUrl}
          title="Apple Music Embed Player"
        />
      </div>
    </div>
  );
}

export default VinylPlayer;
