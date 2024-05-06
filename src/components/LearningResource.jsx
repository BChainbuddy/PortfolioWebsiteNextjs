"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function LearningResource({
  color,
  borderColor,
  text,
  title,
  url,
  img_src,
  even,
}) {
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
      {even ? <img src={img_src} className="w-1/2 rounded-2xl" /> : <></>}

      <div
        className={`text-justify w-1/2 backdrop-blur-3xl ${borderColor} border-2 rounded-2xl py-5 px-8 space-y-3`}
      >
        <h2 className={`text-center ${color} text-2xl font-mono`}>{title}</h2>
        <p className="text-white">
          {text}
          <span className={color}>
            <a href={url} className="underline ml-3">
              Learn more
            </a>
          </span>
        </p>
      </div>
      {even ? <></> : <img src={img_src} className="w-1/2 rounded-2xl" />}
    </article>
  );
}
