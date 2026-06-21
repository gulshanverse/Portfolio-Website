"use client";

import { Canvas } from "@react-three/fiber";
import ParticleGalaxy from "./ParticleGalaxy";

export default function CanvasContainer() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <ParticleGalaxy />
      </Canvas>
    </div>
  );
}
