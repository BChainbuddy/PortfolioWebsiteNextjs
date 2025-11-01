"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SplineScene() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="relative lg:h-[100%] lg:w-[40vw] md:h-60 md:w-60">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-gray-700 border-t-4 border-t-[hsl(169,100%,41%)] rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 border-2 border-transparent border-r-2 border-r-[hsl(169,100%,41%)] rounded-full animate-ping"></div>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: !loading ? 1 : 0, y: !loading ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Spline
            scene="https://prod.spline.design/Cr3d2UjW5GiANCyV/scene.splinecode"
            className="hidden lg:block"
            onLoad={() => setLoading(false)}
          />
        </motion.div>
      </div>
    </>
  );
}
