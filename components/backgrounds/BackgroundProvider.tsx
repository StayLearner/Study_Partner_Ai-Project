"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { PremiumBackground } from './PremiumBackground';

export function BackgroundProvider() {
  const pathname = usePathname();

  // Do not render the global PremiumBackground on the landing page (/)
  if (pathname === '/') {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <PremiumBackground />
    </div>
  );
}
