"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { UserModel } from "./user-model";

const AUTO_SPIN_SPEED = 0.8;
const HOVER_SPIN_MULTIPLIER = 1.5;

interface SpinningUserModelProps {
  isHovered?: boolean;
  isPaused?: boolean;
  scale?: number;
}

export function SpinningUserModel({
  isHovered = false,
  isPaused = false,
  scale = 10,
}: SpinningUserModelProps) {
  const groupRef = useRef<Group>(null);
  const angleA = useRef(0);
  const angleB = useRef(0);

  const spinSpeed = isHovered
    ? AUTO_SPIN_SPEED * HOVER_SPIN_MULTIPLIER
    : AUTO_SPIN_SPEED;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!isPaused) {
      // Iconic a1k0n donut rotation (https://www.a1k0n.net/2011/07/20/donut-math.html):
      // Angle A: rotation around the X-axis (tumble / tilt forwards/backwards)
      // Angle B: rotation around the Z-axis (spin in the screen plane)
      // Speed ratio is 2:1 (dA/dt = 2 * dB/dt)
      angleA.current += delta * spinSpeed * 1.0;
      angleB.current += delta * spinSpeed * 0.5;
    }
    // Euler order 'ZXY' produces R_z(B) * R_x(A), exactly matching the donut math
    groupRef.current.rotation.order = "ZXY";
    groupRef.current.rotation.set(angleA.current, 0, angleB.current);
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <UserModel scale={scale} />
    </group>
  );
}
