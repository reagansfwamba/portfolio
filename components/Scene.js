import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff6347" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ height: '60vh', background: '#1e1e24' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}