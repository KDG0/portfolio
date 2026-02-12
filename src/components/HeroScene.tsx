"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 500 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { viewport } = useThree();

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    const redColor = new THREE.Color("#E94560");
    const blueColor = new THREE.Color("#0F3460");
    const whiteColor = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribute particles in a sphere
      const radius = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);

      // Color mixing
      const t = Math.random();
      const color =
        t < 0.4
          ? redColor.clone()
          : t < 0.8
          ? blueColor.clone()
          : whiteColor.clone();

      col[i3] = color.r;
      col[i3 + 1] = color.g;
      col[i3 + 2] = color.b;

      siz[i] = Math.random() * 3 + 0.5;
    }

    return [pos, col, siz];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth mouse tracking
    mouseRef.current.x += (pointer.x * viewport.width * 0.15 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * viewport.height * 0.15 - mouseRef.current.y) * 0.02;

    mesh.current.rotation.y = time * 0.05 + mouseRef.current.x * 0.3;
    mesh.current.rotation.x = mouseRef.current.y * 0.3;
    mesh.current.rotation.z = Math.sin(time * 0.1) * 0.1;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, colors, sizes]);

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function CoreShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { viewport } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    mouseRef.current.x += (pointer.x * viewport.width * 0.1 - mouseRef.current.x) * 0.03;
    mouseRef.current.y += (pointer.y * viewport.height * 0.1 - mouseRef.current.y) * 0.03;

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.15 + mouseRef.current.y * 0.5;
      meshRef.current.rotation.y = time * 0.2 + mouseRef.current.x * 0.5;
      meshRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);
    }

    if (wireRef.current) {
      wireRef.current.rotation.x = -time * 0.1 + mouseRef.current.y * 0.3;
      wireRef.current.rotation.y = -time * 0.15 + mouseRef.current.x * 0.3;
      wireRef.current.scale.setScalar(1.4 + Math.sin(time * 0.3 + 1) * 0.08);
    }
  });

  return (
    <>
      {/* Inner core - icosahedron */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color="#E94560"
            wireframe
            transparent
            opacity={0.6}
            emissive="#E94560"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Outer shell - dodecahedron */}
      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.3}>
        <mesh ref={wireRef}>
          <dodecahedronGeometry args={[1.6, 0]} />
          <meshStandardMaterial
            color="#0F3460"
            wireframe
            transparent
            opacity={0.3}
            emissive="#0F3460"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </>
  );
}

function OrbitalRing({
  radius,
  speed,
  color,
  opacity = 0.2,
}: {
  radius: number;
  speed: number;
  color: string;
  opacity?: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.PI * 0.35 + Math.sin(time * speed * 0.5) * 0.1;
    ref.current.rotation.z = time * speed;
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[radius, 0.005, 8, 128]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#E94560" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#0F3460" />

      <CoreShape />
      <Particles count={600} />

      <OrbitalRing radius={2.5} speed={0.3} color="#E94560" opacity={0.15} />
      <OrbitalRing radius={3.2} speed={-0.2} color="#0F3460" opacity={0.1} />
      <OrbitalRing radius={3.8} speed={0.15} color="#E94560" opacity={0.08} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
