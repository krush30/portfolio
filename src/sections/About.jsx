import React, { useRef } from "react";
import Card from "../components/Card";

const About = () => {
  const gridContainer2 = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-6
      md:auto-rows-[18rem] mt-12"
      >
        {/*Grid1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem]
            md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext">Hi, I am Krushna Ingale</p>
            <p className="subtext">
              A motivated Full Stack Developer with a strong interest in
              building efficient and user-friendly applications. Skilled in
              ReactJS, Node.js, and the MERN stack, I enjoy solving problems and
              continuously learning new technologies. Eager to contribute,
              collaborate, and grow in a dynamic software development
              environment.
            </p>
          </div>
          <div
            className="absolute inset-0 pointer-events-none
          -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"
          ></div>
        </div>
        {/*Grid2 */}
        <div className="flex  grid-default-color grid-2">
          <div
            ref={gridContainer2}
            className="flex items-center justify-center
            w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              containerRef={gridContainer2}
              text="GRASP"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
            />
            <Card
              containerRef={gridContainer2}
              text="SOLID"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
            />
            <Card
              containerRef={gridContainer2}
              text="DESIGN PATTERNS"
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
            />
            <Card
              containerRef={gridContainer2}
              text="DESIGN PRINCIPLES"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
            />
            <Card
              containerRef={gridContainer2}
              text="GENUINE"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/nodejs-img.png"
              style={{ rotate: "20deg", top: "70%", left: "70%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/mongo-img.png"
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/nextjs-img.png"
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/sql-img.png"
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/ts-img.png"
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
            />
          </div>
        </div>
        {/*Grid3 */}
        <div className="flex grid-black-color grid-3"></div>
        {/*Grid4 */}
        <div className="flex grid-special-color grid-3"></div>
        {/*Grid5 */}
        <div className="flex grid-default-color grid-3"></div>
      </div>
    </section>
  );
};

export default About;
