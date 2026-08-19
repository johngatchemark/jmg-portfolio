"use client";

import { useFrame, useThree } from "@react-three/fiber";

export interface CameraControllerProps {
  position: [number, number, number];
  zoom: number;
}

export function CameraController({ position, zoom }: CameraControllerProps) {
  const { camera } = useThree();

  useFrame(() => {
    // Explicitly set position, straight-ahead orientation (rotation [0,0,0]), and zoom
    // every frame so interactive HUD adjustments and page reloads are 100% identical.
    camera.position.set(position[0], position[1], position[2]);
    camera.rotation.set(0, 0, 0);
    camera.zoom = zoom;
    camera.updateProjectionMatrix();
  });

  return null;
}
