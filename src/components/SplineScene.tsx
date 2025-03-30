"use client";

import Spline from "@splinetool/react-spline/next";
import { motion } from "framer-motion";

export default function SplineScene() {

  return (
    <>
      <div className="relative lg:h-[100%] lg:w-[40vw] md:h-60 md:w-60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Spline
            scene="https://prod.spline.design/Cr3d2UjW5GiANCyV/scene.splinecode"
            className="hidden lg:block"
          />
        </motion.div>
      </div>
    </>
  );
}
