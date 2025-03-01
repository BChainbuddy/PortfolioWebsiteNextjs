"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function AboutParagraph({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "end 0.8"],
  });

  const words = value.split(" ");
  return (
    <p className="w-full flex flex-wrap gap-x-2" ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: number[];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <>
      {children !== "<br>" ? (
        <span className="text-white lg:text-xl md:text-lg text-base font-medium relative">
          <span className="absolute opacity-10">{children}</span>
          <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
      ) : (
        <span className="w-full block mb-5"></span>
      )}
    </>
  );
};
