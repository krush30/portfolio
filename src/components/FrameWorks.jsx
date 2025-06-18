import { img } from "motion/react-client";
import { OrbitingCircles } from "./Orbitcircles";

export function FrameWorks() {
  const skills = [
    "auth0",
    "JavaScript",
    "REST-API",
    "Firebase",
    "GitHub",
    "Tailwind-CSS",
    "nextjs-img",
    "Git",
    "sql-img",
    "mongo-img",
    "nodejs-img",
    "ts-img",
    "Express-js",
    "MERN",
    "React-js",
  ];
  return (
    <div
      className="relative flex h-[15rem] w-full
     flex-col items-center justify-center "
    >
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icons key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icons key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icons = ({ src }) => {
  return (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" alt="" />
  );
};
