import { Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Text3D = ({ isRotating }) => {
  const textRef = useRef();

  // Gentle floating animation
  useFrame(({ clock }) => {
    if (!isRotating && textRef.current) {
      textRef.current.position.y = -3 + Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <group ref={textRef} position={[0, -3, -43]}>
      {/* Main text - Lê Hải Đăng */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor="#0066ff"
        fontWeight="bold"
      >
        Lê Hải Đăng
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.3}
        color="#60a5fa"
        anchorX="center"
        anchorY="middle"
      >
        Full-Stack Developer
      </Text>

      {/* Glow effect */}
      <pointLight
        position={[0, 0, 1]}
        intensity={0.8}
        color="#60a5fa"
        distance={5}
      />
    </group>
  );
};

export default Text3D;
