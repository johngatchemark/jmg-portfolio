"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector2 } from "three";
import { SceneWithDelayedComposer } from "./scene-composer";
import ErrorBoundary from "../../../../components/error-boundary";

export interface EffectSceneProps {
  className?: string;
  /** Optional tint color for glyphs (e.g. "#121212" or "#f5f5f7") */
  tintColor?: string;
  /** Optional background color for empty pixels (e.g. "#f5f5f7" or "#121212") */
  backgroundColor?: string;
  /** Whether model auto-spin rotation is paused */
  isPaused?: boolean;
  /** Camera position [x, y, z] */
  cameraPosition?: [number, number, number];
  /** Camera zoom level */
  cameraZoom?: number;
}

export function EffectScene({
  className,
  tintColor = "#917AFF",
  backgroundColor = "#000000",
  isPaused = false,
  cameraPosition = [-18.3, 0, 32.0],
  cameraZoom = 1.0,
}: EffectSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos] = useState(() => new Vector2(0, 0));
  const [resolution] = useState(() => new Vector2(1920, 1080));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateResolution = () => {
      const rect = container.getBoundingClientRect();
      resolution.set(rect.width || 1920, rect.height || 1080);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = rect.height - (e.clientY - rect.top);
        mousePos.set(x, y);
      }
    };

    updateResolution();
    const ro = new ResizeObserver(updateResolution);
    ro.observe(container);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      ro.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos, resolution]);

  return (
    <ErrorBoundary fallback={null}>
      <div
        ref={containerRef}
        data-model-canvas-container
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "100%",
          height: className ? "100%" : "100vh",
          minHeight: className ? 300 : undefined,
        }}
      >
        <Canvas
          dpr={Math.min(
            typeof window !== "undefined" ? window.devicePixelRatio : 1,
            1.5,
          )}
          camera={{
            position: cameraPosition,
            fov: 50,
            zoom: cameraZoom,
          }}
          style={{ background: backgroundColor }}
          onCreated={({ gl }) => {
            gl.toneMappingExposure = 0.6;

            const handleContextLost = (event: Event) => {
              event.preventDefault();
              console.warn("WebGL context lost. Attempting to restore...");
            };

            const handleContextRestored = () => {
              console.log("WebGL context restored");
            };

            gl.domElement.addEventListener("webglcontextlost", handleContextLost);
            gl.domElement.addEventListener(
              "webglcontextrestored",
              handleContextRestored,
            );

            return () => {
              gl.domElement.removeEventListener(
                "webglcontextlost",
                handleContextLost,
              );
              gl.domElement.removeEventListener(
                "webglcontextrestored",
                handleContextRestored,
              );
            };
          }}
        >
          <Suspense fallback={null}>
            <SceneWithDelayedComposer
              resolution={resolution}
              mousePos={mousePos}
              isHovered={isHovered}
              isPaused={isPaused}
              tintColor={tintColor}
              backgroundColor={backgroundColor}
              cameraPosition={cameraPosition}
              cameraZoom={cameraZoom}
            />
          </Suspense>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
}
