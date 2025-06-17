import { Float, OrbitControls } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallelBG from "../components/ParallelBG";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  {
    /* Using useMediaQuery to determine if the screen is mobile 
        like if the size is 0-853 px then use props values else use
        defaults values in astronauts*/
  }
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      className="flex items-start justify-center 
               min-h-screen overflow-hidden md:items-center md:justify-start
               c-space"
    >
      <HeroText />
      <ParallelBG />
      <figure
        style={{ width: "100vw", height: "100vh" }}
        className="absolute inset-0 "
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

const Rig = () => {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
};

export default Hero;
