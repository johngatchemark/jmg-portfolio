"use client";

import { useEffect, useMemo } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";

export function UserModel(props: ComponentPropsWithoutRef<"group">) {
  const { scene } = useGLTF("/models/user-model.glb");

  const basicMat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#917AFF",
        roughness: 0.12, // Lower = sharper highlights, more contrast
        metalness: 0,
        flatShading: false,
      }),
    [],
  );

  useEffect(() => {
    // Reset FBX baked tilt so the donut lies flat in the X-Z plane (normal along Y)
    const donutNode = scene.getObjectByName("donut");
    if (donutNode) {
      donutNode.rotation.set(Math.PI / 2, 0, 0);
    }

    scene.traverse((obj) => {
      const mesh = obj as Mesh;
      if ((mesh as any).isMesh) {
        const originalMat = (mesh as any).material;
        // Dispose original material if it exists and is different
        if (originalMat && originalMat.dispose && originalMat !== basicMat) {
          try {
            originalMat.dispose();
          } catch {
            // Ignore disposal errors (context might be lost)
          }
        }
        (mesh as any).material = basicMat;
      }
    });

    return () => {
      // Cleanup: dispose material when component unmounts
      try {
        if (basicMat && typeof basicMat.dispose === "function") {
          basicMat.dispose();
        }
      } catch {
        // Ignore disposal errors
      }
    };
  }, [scene, basicMat]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/user-model.glb");
