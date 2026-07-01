import React from 'react';

const PremiumBackgroundComponent = () => {
  return (
    <div 
      className="absolute inset-0 w-full h-full bg-white select-none pointer-events-none overflow-hidden"
    >
      {/* Top Left Sky Blue Glow */}
      <div 
        className="absolute top-[-25%] left-[-25%] w-[75vw] h-[75vw] rounded-full filter blur-[120px] md:blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #D9EEFF 0%, #EAF6FF 45%, rgba(255,255,255,0) 75%)'
        }}
      />

      {/* Bottom Right Soft Mint Glow */}
      <div 
        className="absolute bottom-[-25%] right-[-25%] w-[75vw] h-[75vw] rounded-full filter blur-[120px] md:blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #ECFFF3 0%, rgba(255,255,255,0) 75%)'
        }}
      />

      {/* Center White Radial Glow (guides the focus to the hero and page content) */}
      <div 
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[80vw] h-[80vw] rounded-full filter blur-[80px] opacity-90"
        style={{
          background: 'radial-gradient(circle, #FFFFFF 0%, rgba(255,255,255,0) 70%)'
        }}
      />

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
};

export const PremiumBackground = React.memo(PremiumBackgroundComponent);
