import React from "react";
import { motion } from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      whileHover={{ scale: 1.05 }}
      className="absolute w-15 cursor-pointer"
      src={image}
      style={style}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absoulte px-1 py-4 text-xl text-center
  rounded-full ring ring-gray-700 font-extralight bg-storm
  w-[12rem] cursor-grab"
      style={style}
      drag
      dragConstraints={containerRef}
      whileHover={{ scale: 1.05 }}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
