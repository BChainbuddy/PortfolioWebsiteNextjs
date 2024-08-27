"use client";

import { useRef, useEffect } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);

  //   useEffect(() => {
  //     if (videoRef.current) {
  //       videoRef.current.playbackRate = 1;
  //     }
  //   }, []);

  return (
    <video
      autoPlay
      muted
      loop
      ref={videoRef}
      className="fixed top-0 left-0 w-full h-full object-cover blur-sm"
    >
      <source src="/MovingBackgroundUp.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
