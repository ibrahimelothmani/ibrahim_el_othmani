import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shape component
function FloatingShape({ position, geometry, color }: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={position}>
                {geometry === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
                {geometry === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
                {geometry === 'torus' && <torusGeometry args={[1, 0.4, 16, 100]} />}
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
}

// Particle field component
function ParticleField() {
    const points = useRef<THREE.Points>(null);

    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    useFrame(() => {
        if (points.current) {
            points.current.rotation.y += 0.0005;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#0ea5e9" transparent opacity={0.6} />
        </points>
    );
}

// Main 3D scene
export default function Hero3DScene() {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />

                {/* Floating shapes */}
                <FloatingShape position={[-3, 2, 0]} geometry="sphere" color="#0ea5e9" />
                <FloatingShape position={[3, -1, -2]} geometry="box" color="#38bdf8" />
                <FloatingShape position={[0, -2, 1]} geometry="torus" color="#7dd3fc" />
                <FloatingShape position={[-2, -1, -1]} geometry="sphere" color="#0284c7" />

                {/* Particle field */}
                <ParticleField />

                {/* Optional orbit controls for interactivity */}
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    );
}
