"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface learningResourceProps {
  color: string;
  borderColor: string;
  text: string;
  title: string;
  url: string;
  img_src: string;
  even: boolean;
}

export default function LearningResource({
  color,
  borderColor,
  text,
  title,
  url,
  img_src,
  even,
}: learningResourceProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <article
      className={`flex flex-row resource space-x-6 ${
        even ? "start-resource-even" : "start-resource-odd"
      } ${inView ? "end-resource" : ""}`}
      ref={ref}
    >
      {even ? (
        <div className="w-[35rem] rounded-2xl overflow-hidden relative">
          <Image src={img_src} alt={title} fill sizes="100%" priority />
        </div>
      ) : (
        <></>
      )}

      <div
        className={`text-justify w-[35rem] h-[21rem] backdrop-blur-3xl ${borderColor} border-2 rounded-2xl py-5 px-8 space-y-3 darkGreenBackground`}
      >
        <h2 className={`text-center ${color} text-2xl font-mono`}>{title}</h2>
        <p className="text-white">
          {text}
          <span className={color}>
            <a href={url} className="underline ml-3" target="_blank">
              Learn more
            </a>
          </span>
        </p>
      </div>
      {even ? (
        <></>
      ) : (
        <div className="w-[35rem] rounded-2xl overflow-hidden relative">
          <Image src={img_src} alt={title} fill />
        </div>
      )}
    </article>
  );
}
