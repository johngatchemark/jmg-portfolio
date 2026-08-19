import { useState } from "react";
import { Copy, Check, RotateCcw, ChevronDown, ChevronUp, Sliders } from "lucide-react";

export interface CameraConfig {
  x: number;
  y: number;
  z: number;
  zoom: number;
}

interface CameraControlsHudProps {
  config: CameraConfig;
  onChange: (newConfig: CameraConfig) => void;
  defaultConfig: CameraConfig;
}

export function CameraControlsHud({
  config,
  onChange,
  defaultConfig,
}: CameraControlsHudProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const updateParam = (key: keyof CameraConfig, delta: number) => {
    onChange({
      ...config,
      [key]: parseFloat((config[key] + delta).toFixed(2)),
    });
  };

  const setParam = (key: keyof CameraConfig, val: number) => {
    if (isNaN(val)) return;
    onChange({
      ...config,
      [key]: parseFloat(val.toFixed(2)),
    });
  };

  const handleCopy = () => {
    const formatted = JSON.stringify(config, null, 2);
    const summary = `cameraPosition: [${config.x}, ${config.y}, ${config.z}], cameraZoom: ${config.zoom}`;
    navigator.clipboard.writeText(`${summary}\n\nJSON:\n${formatted}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    onChange(defaultConfig);
  };

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 font-mono text-xs select-none">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 rounded bg-jm-bg/95 backdrop-blur-md border border-fg/20 dark:border-ui shadow-lg text-fg hover:border-jm-green transition-colors cursor-pointer"
        aria-label="Toggle Camera Controls"
      >
        <Sliders size={14} className="text-jm-green" />
        <span className="font-semibold text-xs">Camera Controls</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {/* Floating HUD Panel */}
      {isOpen && (
        <div className="w-88 bg-jm-bg/95 dark:bg-[#0f1015]/95 backdrop-blur-md border-2 border-fg/20 dark:border-ui rounded-lg p-4 shadow-2xl flex flex-col gap-3 text-fg">
          <div className="flex items-center justify-between border-b border-fg/10 dark:border-ui pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-jm-green">
              3D Camera Parameters
            </span>
            <span className="text-[10px] text-jm-muted-fg">Live Tuning</span>
          </div>

          {/* Current Values Quick Readout */}
          <div className="bg-jm-ui/30 dark:bg-black/40 rounded p-2 text-[11px] leading-relaxed border border-fg/10 dark:border-ui/50">
            <div>
              <span className="text-jm-muted-fg">cameraPosition: </span>
              <span className="text-jm-green font-bold">[{config.x.toFixed(2)}, {config.y.toFixed(2)}, {config.z.toFixed(2)}]</span>
            </div>
            <div>
              <span className="text-jm-muted-fg">cameraZoom: </span>
              <span className="text-jm-green font-bold">{config.zoom.toFixed(2)}</span>
            </div>
          </div>

          {/* Controls for X */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold">Camera X (H-shift):</span>
              <input
                type="number"
                step={0.1}
                value={config.x}
                onChange={(e) => setParam("x", parseFloat(e.target.value))}
                className="w-18 px-1.5 py-0.5 rounded bg-jm-ui/40 border border-fg/20 text-jm-green font-bold text-right text-xs"
              />
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => updateParam("x", -2)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                -2
              </button>
              <button
                onClick={() => updateParam("x", -0.5)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                -0.5
              </button>
              <input
                type="range"
                min={-50}
                max={50}
                step={0.1}
                value={config.x}
                onChange={(e) => setParam("x", parseFloat(e.target.value))}
                className="flex-1 accent-jm-green cursor-pointer"
              />
              <button
                onClick={() => updateParam("x", 0.5)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                +0.5
              </button>
              <button
                onClick={() => updateParam("x", 2)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                +2
              </button>
            </div>
          </div>

          {/* Controls for Y */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold">Camera Y (V-shift):</span>
              <input
                type="number"
                step={0.1}
                value={config.y}
                onChange={(e) => setParam("y", parseFloat(e.target.value))}
                className="w-18 px-1.5 py-0.5 rounded bg-jm-ui/40 border border-fg/20 text-jm-green font-bold text-right text-xs"
              />
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => updateParam("y", -2)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                -2
              </button>
              <button
                onClick={() => updateParam("y", -0.5)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                -0.5
              </button>
              <input
                type="range"
                min={-30}
                max={30}
                step={0.1}
                value={config.y}
                onChange={(e) => setParam("y", parseFloat(e.target.value))}
                className="flex-1 accent-jm-green cursor-pointer"
              />
              <button
                onClick={() => updateParam("y", 0.5)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                +0.5
              </button>
              <button
                onClick={() => updateParam("y", 2)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                +2
              </button>
            </div>
          </div>

          {/* Controls for Z */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold">Camera Z (Distance):</span>
              <input
                type="number"
                step={0.5}
                value={config.z}
                onChange={(e) => setParam("z", parseFloat(e.target.value))}
                className="w-18 px-1.5 py-0.5 rounded bg-jm-ui/40 border border-fg/20 text-jm-green font-bold text-right text-xs"
              />
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => updateParam("z", -2)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                -2
              </button>
              <button
                onClick={() => updateParam("z", -0.5)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                -0.5
              </button>
              <input
                type="range"
                min={1}
                max={100}
                step={0.5}
                value={config.z}
                onChange={(e) => setParam("z", parseFloat(e.target.value))}
                className="flex-1 accent-jm-green cursor-pointer"
              />
              <button
                onClick={() => updateParam("z", 0.5)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                +0.5
              </button>
              <button
                onClick={() => updateParam("z", 2)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                +2
              </button>
            </div>
          </div>

          {/* Controls for Zoom */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold">Camera Zoom:</span>
              <input
                type="number"
                step={0.05}
                value={config.zoom}
                onChange={(e) => setParam("zoom", parseFloat(e.target.value))}
                className="w-18 px-1.5 py-0.5 rounded bg-jm-ui/40 border border-fg/20 text-jm-green font-bold text-right text-xs"
              />
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => updateParam("zoom", -0.5)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                -0.5
              </button>
              <button
                onClick={() => updateParam("zoom", -0.1)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                -0.1
              </button>
              <input
                type="range"
                min={0.1}
                max={5}
                step={0.05}
                value={config.zoom}
                onChange={(e) => setParam("zoom", parseFloat(e.target.value))}
                className="flex-1 accent-jm-green cursor-pointer"
              />
              <button
                onClick={() => updateParam("zoom", 0.1)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                +0.1
              </button>
              <button
                onClick={() => updateParam("zoom", 0.5)}
                className="px-1.5 py-1 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 text-[10px] active:scale-95 cursor-pointer"
              >
                +0.5
              </button>
            </div>
          </div>

          {/* Action Buttons: Copy & Reset */}
          <div className="flex items-center gap-2 pt-2 border-t border-fg/10 dark:border-ui">
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-jm-green text-black font-semibold text-xs hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Values</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              title="Reset to initial values"
              className="p-1.5 rounded bg-jm-ui/40 hover:bg-jm-ui text-fg border border-fg/10 active:scale-95 transition-all cursor-pointer"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
