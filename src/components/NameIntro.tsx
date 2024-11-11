"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

export default function NameIntro() {
  const controls = useAnimationControls();

  const handleMouseOn = () => {
    controls.start("wave");
  };

  return (
    <div
      id="name"
      className="homepage-start1 sm:items-end md:items-center space-x-1 md:text-start sm:text-center md:justify-normal sm:justify-center"
      onMouseEnter={handleMouseOn}
    >
      <p className="flex sm:justify-center md:justify-normal items-center cursor-default sm:text-4xl md:text-5xl text-white text-transparent bg-clip-text">
        Hello
        <motion.span
          className="inline-block sm:h-14 sm:w-14 md:h-20 md:w-20 relative"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={{
            initial: { rotate: "0deg" },
            wave: { rotate: [0, 60, -60, 10, -10, 0] },
          }}
          initial="initial"
          animate={controls}
        >
          <Image
            src="/1F44B.svg"
            sizes="100%"
            fill
            alt="wavingEmoji"
            style={{
              objectFit: "cover",
            }}
          />
        </motion.span>
        , MY
      </p>
      <p className="sm:text-5xl md:text-6xl text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom md:text-start md:w-auto sm:text-center">
        NAME IS JAKA
      </p>
    </div>
  );
}
