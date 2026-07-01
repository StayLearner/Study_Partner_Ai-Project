"use client";

import React from 'react';
import { Grainient } from './Grainient';

export const LandingBackground = React.memo(() => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none bg-white">
      {/* 1. Soft Cyan Glow (10% opacity) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full filter blur-[140px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #2DD4BF 0%, rgba(255,255,255,0) 75%)'
        }}
      />

      {/* 2. Soft Teal Glow (10% opacity) */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full filter blur-[140px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #0D9488 0%, rgba(255,255,255,0) 75%)'
        }}
      />

      {/* 3. Soft Blue Radial Gradient (12% opacity) */}
      <div 
        className="absolute top-[20%] right-[10%] w-[55vw] h-[55vw] rounded-full filter blur-[120px] opacity-12"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, rgba(255,255,255,0) 70%)'
        }}
      />

      {/* Grainient Layer (rendered on top with low opacity to add animated depth) */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply">
        <Grainient
          color1="#FFFFFF"
          color2="#60A5FA"
          color3="#34D399"
          timeSpeed={0.05}
          warpStrength={0.25}
          warpFrequency={2.0}
          warpSpeed={0.4}
          warpAmplitude={15}
          grainAmount={0.015}
          grainScale={3}
          grainAnimated={false}
          contrast={1.02}
          gamma={1.0}
          saturation={0.8}
          centerX={0}
          centerY={0}
          zoom={1.1}
        />
      </div>

      {/* Subtle Noise Texture Overlay (adds premium paper-like texture) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.015] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="premium-noise-filter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.85" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#premium-noise-filter)" />
      </svg>
    </div>
  );
});

LandingBackground.displayName = 'LandingBackground';
