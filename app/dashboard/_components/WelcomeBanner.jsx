'use client'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div className="p-4 sm:p-5 bg-gradient-to-r from-teal-400 to-transparent w-full text-white rounded-lg flex items-center gap-4 sm:gap-6">
      {/* Responsive image – smaller on mobile */}
      <div className="shrink-0">
        <Image
          src={"/laptop.png"}
          alt="laptop"
          width={100}
          height={100}
          className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
        />
      </div>

      <div className="min-w-0">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl leading-tight truncate">
          Hello, {user?.fullName}
        </h2>
        <p className="text-sm sm:text-base text-white/80 mt-0.5">
          Welcome Back, It&apos;s time to get back and Learn
        </p>
      </div>
    </div>
  )
}

export default WelcomeBanner