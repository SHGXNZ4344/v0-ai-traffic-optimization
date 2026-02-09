'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Environment, PerspectiveCamera } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { Group } from 'three';

function TrafficSignal({ position, isActive }: { position: [number, number, number]; isActive: boolean }) {
  const ref = useRef<Group>(null);

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[0.3, 0.8, 0.1]} />
        <meshPhongMaterial color="#333" />
      </mesh>
      <mesh position={[0, 0.25, 0.1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhongMaterial color={isActive ? '#00ff00' : '#333'} emissive={isActive ? '#00ff00' : '#000'} emissiveIntensity={isActive ? 0.8 : 0} />
      </mesh>
      <mesh position={[0, 0, 0.1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhongMaterial color={isActive ? '#ffaa00' : '#333'} emissive={isActive ? '#ffaa00' : '#000'} emissiveIntensity={isActive ? 0.4 : 0} />
      </mesh>
      <mesh position={[0, -0.25, 0.1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhongMaterial color="#ff0000" emissive={isActive ? '#000' : '#ff0000'} emissiveIntensity={isActive ? 0 : 0.6} />
      </mesh>
    </group>
  );
}

function Vehicle({ position, type }: { position: [number, number, number]; type: 'bus' | 'car' | 'bike' }) {
  const colors: Record<string, string> = {
    bus: '#1f2937',
    car: '#4b5563',
    bike: '#f59e0b',
  };

  const scales: Record<string, [number, number, number]> = {
    bus: [1.2, 0.6, 2.4],
    car: [0.8, 0.5, 1.6],
    bike: [0.4, 0.4, 0.8],
  };

  return (
    <mesh position={position}>
      <boxGeometry args={scales[type]} />
      <meshPhongMaterial color={colors[type]} emissive={colors[type]} emissiveIntensity={0.3} />
    </mesh>
  );
}

function RoadNetwork() {
  return (
    <group>
      {/* Main horizontal road */}
      <mesh position={[0, -0.1, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[20, 3]} />
        <meshPhongMaterial color="#333" />
      </mesh>

      {/* Road markings */}
      <mesh position={[0, -0.05, 0]}>
        <planeGeometry args={[20, 0.2]} />
        <meshPhongMaterial color="#ffff00" />
      </mesh>

      {/* Vertical road */}
      <mesh position={[0, -0.1, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[3, 20]} />
        <meshPhongMaterial color="#444" />
      </mesh>

      {/* Road markings vertical */}
      <mesh position={[0, -0.05, 0]}>
        <planeGeometry args={[0.2, 20]} />
        <meshPhongMaterial color="#ffff00" />
      </mesh>
    </group>
  );
}

function DataFlowNode({ position, label, color }: { position: [number, number, number]; label: string; color: string }) {
  const ref = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref} position={position} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <mesh scale={hovered ? 1.3 : 1}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={hovered ? 0.8 : 0.4} wireframe={false} />
      </mesh>

      {/* Wireframe overlay */}
      <mesh scale={1.21}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>

      {/* Label */}
      <Text position={[0, -1.8, 0]} fontSize={0.4} color={color} anchorX="center" anchorY="top" fontWeight="bold">
        {label}
      </Text>
    </group>
  );
}

function InfrastructureElement({ position, type }: { position: [number, number, number]; type: 'bridge' | 'sensor' | 'camera' }) {
  const heights: Record<string, number> = {
    bridge: 1.5,
    sensor: 1,
    camera: 0.8,
  };

  const colors: Record<string, string> = {
    bridge: '#6b7280',
    sensor: '#3b82f6',
    camera: '#8b5cf6',
  };

  return (
    <mesh position={position}>
      <coneGeometry args={[0.4, heights[type], 8]} />
      <meshPhongMaterial color={colors[type]} emissive={colors[type]} emissiveIntensity={0.3} />
    </mesh>
  );
}

function ConnectionLine({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([start[0], start[1], start[2], end[0], end[1], end[2]])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} linewidth={2} transparent opacity={0.6} />
    </line>
  );
}

export function DigitalTwin3D() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Canvas>
        <PerspectiveCamera makeDefault position={[15, 12, 18]} fov={50} />
        <OrbitControls enableZoom enablePan autoRotate autoRotateSpeed={1} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[15, 15, 15]} intensity={1.2} />
        <pointLight position={[-15, -15, -15]} intensity={0.6} color="#3b82f6" />
        <pointLight position={[10, -10, 10]} intensity={0.8} color="#8b5cf6" />

        {/* Environment */}
        <Environment preset="night" />

        {/* Physical Road Network */}
        <RoadNetwork />

        {/* Traffic Signals */}
        <TrafficSignal position={[-3, 1, -3]} isActive={true} />
        <TrafficSignal position={[3, 1, -3]} isActive={false} />
        <TrafficSignal position={[-3, 1, 3]} isActive={false} />
        <TrafficSignal position={[3, 1, 3]} isActive={true} />

        {/* Vehicles on road */}
        <Vehicle position={[-6, 0.5, 0]} type="bus" />
        <Vehicle position={[0, 0.5, -6]} type="car" />
        <Vehicle position={[6, 0.5, 3]} type="bike" />
        <Vehicle position={[4, 0.5, -3]} type="car" />

        {/* Infrastructure elements (sensors, cameras) */}
        <InfrastructureElement position={[-5, 2, 5]} type="sensor" />
        <InfrastructureElement position={[5, 2, 5]} type="camera" />
        <InfrastructureElement position={[5, 2, -5]} type="sensor" />
        <InfrastructureElement position={[-5, 2, -5]} type="camera" />
        <InfrastructureElement position={[0, 3, 8]} type="bridge" />

        {/* Data processing nodes (right side) */}
        <DataFlowNode position={[12, 8, 0]} label="Real-time" color="#3b82f6" />
        <DataFlowNode position={[12, 4, 0]} label="AI/ML" color="#8b5cf6" />
        <DataFlowNode position={[12, 0, 0]} label="Predictions" color="#ec4899" />

        {/* Connection lines from infrastructure to processing */}
        <ConnectionLine start={[-5, 2, 5]} end={[12, 8, 0]} color="#3b82f6" />
        <ConnectionLine start={[5, 2, 5]} end={[12, 8, 0]} color="#3b82f6" />
        <ConnectionLine start={[5, 2, -5]} end={[12, 4, 0]} color="#8b5cf6" />
        <ConnectionLine start={[-5, 2, -5]} end={[12, 4, 0]} color="#8b5cf6" />

        {/* Feedback lines from predictions to signals */}
        <ConnectionLine start={[12, 0, 0]} end={[-3, 1, -3]} color="#ec4899" />
        <ConnectionLine start={[12, 0, 0]} end={[3, 1, -3]} color="#ec4899" />
        <ConnectionLine start={[12, 4, 0]} end={[-3, 1, 3]} color="#8b5cf6" />
        <ConnectionLine start={[12, 4, 0]} end={[3, 1, 3]} color="#8b5cf6" />

        {/* Grid */}
        <gridHelper args={[40, 40]} position={[0, -0.2, 0]} />
      </Canvas>

      {/* Info Overlay */}
      <div className="absolute bottom-8 left-8 max-w-sm">
        <div className="bg-slate-950/80 backdrop-blur border border-slate-800 rounded-lg p-6">
          <h3 className="text-white font-bold text-lg mb-2">AI-Driven Urban Mobility</h3>
          <p className="text-slate-300 text-sm mb-3">Real-time traffic management and infrastructure optimization using AI and predictive analytics.</p>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
            <div>🚗 Smart Traffic Control</div>
            <div>📡 Real-time Monitoring</div>
            <div>🤖 AI Predictions</div>
            <div>🔧 Predictive Maintenance</div>
          </div>
        </div>
      </div>

      {/* Controls Info */}
      <div className="absolute top-8 right-8 text-slate-400 text-sm">
        <p>🖱️ Drag to rotate • 🔍 Scroll to zoom • 📍 Right-click to pan</p>
      </div>

      {/* Layer Labels */}
      <div className="absolute top-8 left-8 text-slate-400 text-sm space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span>Physical Network</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span>AI Processing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-pink-500 rounded"></div>
          <span>Optimization</span>
        </div>
      </div>
    </div>
  );
}
