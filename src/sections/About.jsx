import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmail from "../components/CopyEmail";
import { FrameWorks } from "../components/FrameWorks";

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
        <div className="grid grid-default-color grid-2">
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
              image="assets/logos/MERN.png"
              style={{ rotate: "100deg", top: "50%", left: "10%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/auth0.png"
              style={{ rotate: "59deg", top: "10%", left: "70%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/React-js.png"
              style={{ rotate: "90", top: "50%", left: "5%" }}
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
              style={{ rotate: "-30deg", top: "35%", left: "15%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/sql-img.png"
              style={{ rotate: "55deg", top: "55%", left: "50%" }}
            />
            <Card
              containerRef={gridContainer2}
              image="assets/logos/ts-img.png"
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
            />
          </div>
        </div>
        {/*Grid3 */}
        <div className="flex grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/*Grid4 */}
        <div className=" grid-special-color grid-4">
          <div
            className="flex flex-col items-center justify-center
          gap-4 size-full"
          >
            <p className="text-center headtext">
              Let's Build a project together!
            </p>
            <CopyEmail />
          </div>
        </div>
        {/*Grid5 */}
        <div className=" grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages ,FrameWorks, and tools that
              allow me to build robust and Scalable application{" "}
            </p>
          </div>
          <div
            className="absolute inset-y-0 md:inset-y-9 w-full
          h-full start-[50%] md:scale-125"
          >
            <FrameWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
