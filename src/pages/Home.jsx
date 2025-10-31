import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { HomeInfo, Loader } from "../components";
import Island from "../Models/Island";
import Sky from "../Models/sky";
import Bird from "../Models/Bird";
import Plane from "../Models/Plane";
import Text3D from "../Models/Text3D";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1, 5];
    } else {
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [-80, -50, 60];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="absolute top-24 right-8 z-10 max-w-md">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Scroll indicator - more visible */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-10 h-14 border-4 border-white rounded-full flex justify-center items-start p-2 bg-black/20 backdrop-blur-sm shadow-lg shadow-white/20">
          <div className="w-2 h-4 bg-white rounded-full animate-pulse"></div>
        </div>
        <p className="text-white text-base mt-3 text-center font-bold drop-shadow-lg">
          Kéo để xoay
        </p>
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ position: [0, 0, 20], near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting - darker and more atmospheric */}
          <directionalLight position={[5, 5, 5]} intensity={0.4} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 5, 10]} intensity={0.2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={0.2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0.4}
          />

          <Bird isRotating={isRotating} />
          <Sky isRotating={isRotating} />
          <Text3D isRotating={isRotating} />
          <Island
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
