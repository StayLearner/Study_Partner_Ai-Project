"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = GLOBE({
      el: vantaRef.current,
      THREE,
      color: 0x2ec4eb, // Globe color
      backgroundColor: 0xe3e3e3, // Background color
      size: 1.0, // Adjust size
      scale: 1.0,
      scaleMobile: 1.0,
      mouseControls: true,
      touchControls: true,
    });

    return () => effect.destroy();
  }, []);

  return <div ref={vantaRef} style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
