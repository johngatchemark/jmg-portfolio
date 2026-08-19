"use client";

import { Suspense, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Environment } from "@react-three/drei";
import type { Vector2 } from "three";
import { AsciiEffect } from "./ascii-effect";
import { CameraController } from "./camera-controller";
import { SpinningUserModel } from "./spinning-model";

export interface SceneWithDelayedComposerProps {
  resolution: Vector2;
  mousePos: Vector2;
  isHovered?: boolean;
  isPaused?: boolean;
  tintColor?: string;
  backgroundColor?: string;
  cameraPosition: [number, number, number];
  cameraZoom: number;
}

/** Mounts EffectComposer only after the first frames so WebGL context exists (avoids postprocessing addPass reading null .alpha) */
export function SceneWithDelayedComposer({
  resolution,
  mousePos,
  isHovered = false,
  isPaused = false,
  tintColor,
  backgroundColor,
  cameraPosition,
  cameraZoom,
}: SceneWithDelayedComposerProps) {
  const { gl } = useThree();
  const [composerReady, setComposerReady] = useState(false);
  const frameCount = useRef(0);

  useFrame(() => {
    frameCount.current++;
    // Wait for at least 3 frames before mounting composer
    if (frameCount.current >= 3 && !composerReady) {
      setTimeout(() => {
        try {
          const context = gl.getContext();
          if (
            context &&
            !(context as WebGLRenderingContext).isContextLost?.()
          ) {
            setComposerReady(true);
          }
        } catch {
          // Ignore errors
        }
      }, 100);
    }
  });

  return (
    <>
      <color attach="background" args={[backgroundColor || "#000000"]} />
      <CameraController position={cameraPosition} zoom={cameraZoom} />
      <Suspense fallback={null}>
        <Environment preset="studio" background={false} />
      </Suspense>
      <ambientLight intensity={0.08} />
      <directionalLight position={[2, 3.5, 6]} intensity={6} />
      <directionalLight position={[-2, 1.5, 4]} intensity={0.35} />
      <Suspense fallback={null}>
        <SpinningUserModel isHovered={isHovered} isPaused={isPaused} />
      </Suspense>
      {composerReady && (
        <EffectComposer>
          <AsciiEffect
            style="standard"
            cellSize={15}
            invert={true}
            color={true}
            characterSet="terminal"
            volumeShading={true}
            tintColor={tintColor}
            backgroundColor={backgroundColor}
            resolution={resolution}
            mousePos={mousePos}
            postfx={{
              contrastAdjust: 1.8,
              brightnessAdjust: 0,
            }}
          />
        </EffectComposer>
      )}
    </>
  );
}
