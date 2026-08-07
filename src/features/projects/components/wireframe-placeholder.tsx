interface WireframePlaceholderProps {
  type:
    | "lakadph-map"
    | "lakadph-lights"
    | "lakadph-hud"
    | "scaffled-ide"
    | "scaffled-ai"
    | "scaffled-analytics"
    | "studdy-feed"
    | "studdy-schedule"
    | "studdy-uikit";
  className?: string;
}

export default function WireframePlaceholder({
  type,
  className = "",
}: WireframePlaceholderProps) {
  return (
    <div
      className={`w-full aspect-16/10 rounded-xs border border-jm-fg/30 dark:border-jm-ui/40 bg-[#f9f9f5] dark:bg-[#121218] flex flex-col overflow-hidden relative font-mono text-xs select-none ${className}`}
    >
      {/* Schematic Header Bar */}
      <div className="h-7 px-3 bg-[#eaeae3] dark:bg-[#1a1b24] border-b border-jm-fg/30 dark:border-jm-ui/40 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-jm-primary/80" />
          <span className="text-jm-fg dark:text-jm-light font-semibold tracking-wider">
            WIREFRAME :: {type.toUpperCase()}
          </span>
        </div>
        <span className="text-jm-muted-fg text-[10px] hidden sm:inline">
          [SCHEMATIC MOCKUP]
        </span>
      </div>

      {/* Wireframe Canvas Viewports */}
      <div className="flex-1 p-3 flex flex-col gap-2 relative overflow-hidden">
        {type === "lakadph-map" && (
          <div className="w-full h-full flex flex-col gap-2">
            {/* Map Top Filter Bar */}
            <div className="flex gap-2">
              <div className="h-5 w-24 bg-jm-primary/20 border border-jm-primary text-jm-primary rounded-xs px-2 text-[10px] flex items-center justify-between font-bold">
                <span>SUN: 3:30PM</span>
                <span>84% SHADE</span>
              </div>
              <div className="h-5 w-20 bg-jm-fg/10 dark:bg-white/10 border border-jm-fg/20 dark:border-white/20 rounded-xs px-2 text-[10px] flex items-center">
                STREETLIGHTS
              </div>
            </div>
            {/* SVG Map Schematics */}
            <div className="flex-1 border border-dashed border-jm-fg/30 dark:border-jm-ui/40 rounded-xs relative bg-black/5 dark:bg-white/5 p-2 flex items-center justify-center">
              <svg
                className="w-full h-full text-jm-fg/40 dark:text-jm-ui/40"
                viewBox="0 0 300 150"
                fill="none"
              >
                {/* Building blocks */}
                <rect x="20" y="20" width="50" height="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.1" />
                <rect x="90" y="15" width="70" height="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.1" />
                <rect x="180" y="25" width="90" height="35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.1" />
                <rect x="30" y="85" width="80" height="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.1" />
                <rect x="150" y="85" width="120" height="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.1" />
                
                {/* Shaded Route Polyline */}
                <path d="M 25 70 L 80 70 L 80 135 L 140 135 L 140 75 L 280 75" stroke="#0a6b42" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="25" cy="70" r="4" fill="#0a6b42" />
                <circle cx="280" cy="75" r="4" fill="#005d7a" />
              </svg>
              <div className="absolute bottom-2 left-2 bg-jm-bg border border-jm-primary px-2 py-0.5 rounded-xs text-[10px] text-jm-primary font-bold">
                PROPOSED SHADED ROUTE (1.2 km • 14 min walk)
              </div>
            </div>
          </div>
        )}

        {type === "lakadph-lights" && (
          <div className="w-full h-full flex flex-col gap-2">
            <div className="flex justify-between items-center bg-black/80 text-white p-2 rounded-xs text-[11px]">
              <span className="text-jm-green font-bold">&gt; NIGHT MODE ACTIVE</span>
              <span>OVERPASS LIGHTING INDEX: HIGH</span>
            </div>
            <div className="flex-1 border border-jm-fg/30 dark:border-jm-ui/40 rounded-xs bg-[#0b0c10] p-3 relative flex flex-col justify-around">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
                <div className="h-2 flex-1 bg-yellow-400/40 rounded-xs" />
                <span className="text-[10px] text-yellow-300">92 LUX (WELL LIT)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="h-2 flex-1 bg-emerald-400/40 rounded-xs" />
                <span className="text-[10px] text-emerald-300">MAIN AVENUE CORRIDOR</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="h-2 flex-1 bg-red-400/20 rounded-xs" />
                <span className="text-[10px] text-red-300">UNLIT ALLEY (AVOIDED)</span>
              </div>
            </div>
          </div>
        )}

        {type === "lakadph-hud" && (
          <div className="w-full h-full flex items-center justify-center p-2">
            <div className="w-44 border-2 border-jm-primary bg-jm-bg rounded-xs p-3 flex flex-col gap-2 text-[11px]">
              <div className="font-bold text-jm-primary flex justify-between">
                <span>TURN RIGHT</span>
                <span>80m</span>
              </div>
              <p className="text-[10px] text-jm-muted-fg leading-tight">
                Katipunan Ave. Shaded Sidewalk
              </p>
              <div className="h-1.5 w-full bg-jm-primary/20 rounded-xs overflow-hidden">
                <div className="h-full w-3/4 bg-jm-primary" />
              </div>
              <div className="text-[9px] text-jm-fg flex justify-between font-mono">
                <span>SHADE: 91%</span>
                <span>ETA: 4 MIN</span>
              </div>
            </div>
          </div>
        )}

        {type === "scaffled-ide" && (
          <div className="w-full h-full flex gap-2">
            {/* Left Sidebar */}
            <div className="w-1/4 border-r border-jm-fg/20 dark:border-jm-ui/30 flex flex-col gap-1 pr-1 text-[9px]">
              <div className="font-bold text-jm-primary text-[10px]">PROJECT</div>
              <div className="text-jm-fg bg-jm-primary/10 px-1 rounded-xs">Main.java</div>
              <div className="text-jm-muted-fg px-1">Parser.java</div>
              <div className="text-jm-muted-fg px-1">Utils.java</div>
            </div>
            {/* Editor Area */}
            <div className="flex-1 flex flex-col gap-1 relative text-[10px]">
              <div className="flex justify-between border-b border-jm-fg/20 pb-1 text-[9px]">
                <span>Main.java</span>
                <span className="text-jm-accent font-bold">CONFUSION SCORE: 0.82 (HIGH)</span>
              </div>
              <div className="space-y-1 font-mono text-[9px]">
                <div className="text-jm-muted-fg">1  public class DebugTutor &#123;</div>
                <div className="text-jm-muted-fg">2    public static void main(String[] args) &#123;</div>
                <div className="bg-red-500/20 text-jm-fg px-1 rounded-xs border-l-2 border-red-500">
                  3      int result = divide(10, 0); // &lt;-- GAZE FIXATION (4.2s)
                </div>
                <div className="text-jm-muted-fg">4    &#125;</div>
                <div className="text-jm-muted-fg">5  &#125;</div>
              </div>
              {/* Eye gaze focal ring mockup */}
              <div className="absolute right-6 top-8 w-10 h-10 rounded-full border-2 border-jm-accent border-dashed animate-spin text-[8px] flex items-center justify-center text-jm-accent">
                GAZE
              </div>
            </div>
          </div>
        )}

        {type === "scaffled-ai" && (
          <div className="w-full h-full flex flex-col gap-2 justify-between">
            <div className="border border-jm-accent bg-jm-accent/10 p-2 rounded-xs flex flex-col gap-1">
              <span className="font-bold text-jm-accent text-[11px]">&gt; SOCRATIC GUIDANCE BOT</span>
              <p className="text-[10px] text-jm-fg leading-relaxed">
                "It looks like you're looking at line 3 for a while. What happens when a number is divided by zero in Java?"
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-jm-primary/20 border border-jm-primary text-jm-primary rounded-xs py-1 text-[10px] font-bold">
                [ Request Hint 1 ]
              </button>
              <button className="flex-1 bg-jm-fg/10 border border-jm-fg/30 text-jm-fg rounded-xs py-1 text-[10px]">
                [ I Understand ]
              </button>
            </div>
          </div>
        )}

        {type === "scaffled-analytics" && (
          <div className="w-full h-full flex flex-col gap-2">
            <div className="text-[11px] font-bold text-jm-primary">RESEARCH DIAGNOSTICS :: EYE TRACKER &amp; MOUSE TRAJECTORY</div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="border border-jm-fg/30 rounded-xs p-2 flex flex-col justify-between">
                <span className="text-[10px] text-jm-muted-fg">FIXATION DURATION</span>
                <span className="text-lg font-bold text-jm-fg">4.28 sec</span>
                <span className="text-[9px] text-jm-primary">+1.4s above baseline</span>
              </div>
              <div className="border border-jm-fg/30 rounded-xs p-2 flex flex-col justify-between">
                <span className="text-[10px] text-jm-muted-fg">REGRESSION SACCADES</span>
                <span className="text-lg font-bold text-jm-secondary">14 counts</span>
                <span className="text-[9px] text-jm-secondary">High code scanning</span>
              </div>
            </div>
          </div>
        )}

        {type === "studdy-feed" && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-48 h-full border-2 border-jm-fg rounded-xs bg-jm-bg p-2 flex flex-col gap-2">
              <div className="h-5 bg-jm-primary/20 text-jm-primary font-bold px-2 rounded-xs flex items-center justify-between text-[10px]">
                <span>STUDDY MATCH</span>
                <span>CS 2026</span>
              </div>
              <div className="flex-1 border border-dashed border-jm-fg/30 rounded-xs p-2 flex flex-col justify-between text-[10px]">
                <div>
                  <div className="font-bold text-jm-fg">Alex Rivers</div>
                  <div className="text-[9px] text-jm-muted-fg">Algorithms &amp; Data Structures</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-jm-secondary/20 text-jm-secondary px-1 text-[8px] rounded-xs font-bold">Library Hub</span>
                  <span className="bg-jm-accent/20 text-jm-accent px-1 text-[8px] rounded-xs font-bold">Mon/Wed</span>
                </div>
              </div>
              <div className="flex gap-2 text-[9px]">
                <button className="flex-1 border border-red-400 text-red-400 rounded-xs py-1 font-bold">SKIP</button>
                <button className="flex-1 bg-jm-primary text-white rounded-xs py-1 font-bold">CONNECT</button>
              </div>
            </div>
          </div>
        )}

        {type === "studdy-schedule" && (
          <div className="w-full h-full flex flex-col gap-2 text-[10px]">
            <div className="flex justify-between items-center font-bold text-jm-fg border-b border-jm-fg/20 pb-1">
              <span>OCTOBER 2026</span>
              <span className="text-jm-primary">3 SESSIONS SCHEDULED</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-mono text-[9px]">
              {["M","T","W","T","F","S","S"].map((d, i) => (
                <div key={i} className="text-jm-muted-fg font-bold">{d}</div>
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-5 border rounded-xs flex items-center justify-center ${
                    i === 4 || i === 9
                      ? "bg-jm-primary text-white border-jm-primary font-bold"
                      : "border-jm-fg/20 text-jm-fg"
                  }`}
                >
                  {i + 10}
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "studdy-uikit" && (
          <div className="w-full h-full flex flex-col gap-2 text-[10px]">
            <span className="font-bold text-jm-primary">MATERIAL 3 COMPOSE CANVAS COMPONENTS</span>
            <div className="grid grid-cols-3 gap-2 flex-1">
              <div className="border border-jm-fg/30 rounded-xs p-1 flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-full border-4 border-jm-primary border-t-transparent animate-spin mb-1" />
                <span className="text-[8px]">Canvas Loader</span>
              </div>
              <div className="border border-jm-fg/30 rounded-xs p-1 flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-xs bg-jm-secondary/30 border border-jm-secondary flex items-center justify-center text-jm-secondary font-bold text-[10px]">
                  94%
                </div>
                <span className="text-[8px]">Match Radar</span>
              </div>
              <div className="border border-jm-fg/30 rounded-xs p-1 flex flex-col items-center justify-center">
                <div className="w-8 h-4 bg-jm-accent rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-0" />
                </div>
                <span className="text-[8px]">M3 Switch</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
