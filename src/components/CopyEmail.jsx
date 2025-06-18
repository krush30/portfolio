import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const CopyEmail = () => {
  const [copy, setCopy] = useState(false);
  const email = "ingalekrushna2030@gmail.com";

  const copyT0clipboard = () => {
    navigator.clipboard.writeText(email);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ y: 1.05 }}
      onClick={copyT0clipboard}
      className="relative px-1 py-4 text-sm
                 text-center font-extralight bg-primary w-[12rem]
                 cursor-pointer overflow-hidden rounded-4xl"
    >
      <AnimatePresence mode="wait">
        {copy ? (
          <motion.p
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="flex items-center justify-center gap-2"
          >
            <img src="assets/copy-done.svg" className="w-5" alt="" />
            Email has Copied
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="flex items-center justify-center gap-2"
          >
            <img src="assets/copy.svg" className="w-5" alt="" />
            Copy email address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmail;
