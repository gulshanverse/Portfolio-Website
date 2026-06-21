"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleGalaxy() {
  const pointsRef = useRef<THREE.Points>(null);

  const count = 1000;
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorCyan = new THREE.Color("#00f2fe");
    const colorPurple = new THREE.Color("#8b5cf6");

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 7 + 0.5;
      const spin = radius * 0.8;

      positions[i * 3]     = Math.cos(angle + spin) * radius + (Math.random() - 0.5) * 0.8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      positions[i * 3 + 2] = Math.sin(angle + spin) * radius + (Math.random() - 0.5) * 0.8;

      const ratio = radius / 7;
      const mixedColor = colorCyan.clone().lerp(colorPurple, Math.min(Math.max(ratio + (Math.random() - 0.5) * 0.2, 0), 1));
      colors[i * 3]     = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return { positions, colors };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.04;
    const mx = state.pointer.x * 0.15;
    const my = state.pointer.y * 0.15;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, my, 0.05);
    pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, -mx, 0.05);
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.25}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
