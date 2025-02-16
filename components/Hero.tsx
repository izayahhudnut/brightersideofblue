'use client'

import React, { useState } from "react"
import Image from "next/image"
import Button from "./ui/Button"
import { Plus_Jakarta_Sans } from 'next/font/google'
import { X } from 'lucide-react'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
})

export default function Hero() {
  const [showEpisodesPopup, setShowEpisodesPopup] = useState(false)

  const platformLinks = [
    { 
      name: 'Spotify', 
      image: '/minispotify.svg', 
      href: 'https://open.spotify.com/show/5SapJxcx9ZM9s7D1zEgryh' 
    },
    { 
      name: 'YouTube', 
      image: '/miniyoutube.svg', 
      href: 'https://www.youtube.com/channel/UCyxANUH2srMZdE_kOWpWTyg' 
    },
    { 
      name: 'TikTok', 
      image: '/minitiktok.svg', 
      href: 'https://www.tiktok.com/@brightersideofblue' 
    },
    { 
      name: 'Apple Podcast', 
      image: '/miniapple.svg', 
      href: 'https://podcasts.apple.com/us/podcast/the-brighter-side-of-blue-podcast/id1715141379' 
    },
  ]

  return (
    <div className={`bg-[#222128] w-full ${plusJakartaSans.className}`}>
      {/* Main content container */}
      <div className="mx-auto w-full px-4 md:w-[80%] pt-8 md:pt-20">
        {/* Flex container for top section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4">
          {/* Hero title image */}
          <div className="w-full md:w-auto">
            <Image
              src="HeroTitle.svg"
              alt="Text"
              height="400"
              width="600"
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right side content */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right md:max-w-[30%]">
            <p className="text-base md:text-lg mb-4 text-white">
              Join us for exciting conversations about Police Rules terms and so much more. Our awesome guests are industry experts.
            </p>
            <Image
              src="/HeroSocial.svg"
              alt="social"
              height={100}
              width={100}
              className="w-20 md:w-auto h-auto"
            />
            <p className="mt-2 opacity-60 text-white text-sm md:text-base">
              +100K Worldwide listener
            </p>
          </div>
        </div>
      </div>

      {/* Button container - centered on mobile, positioned absolutely on desktop */}
      <div className="relative w-full flex justify-center my-8 md:my-0">
        <div className="md:absolute md:left-1/2 md:top-[45%] md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <Button 
            text="Start Listening" 
            size="large" 
            onClick={() => setShowEpisodesPopup(true)} 
          />
        </div>
      </div>

      {/* Hero image */}
      <div className="w-full mt-4 md:mt-0">
        <Image
          src="/HeroImage.svg"
          alt="image"
          height={100}
          width={100}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Episodes Popup */}
      {showEpisodesPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-[#222128] rounded-xl p-8 max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-2xl font-bold">Listen on</h2>
              <button 
                onClick={() => setShowEpisodesPopup(false)}
                className="text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {platformLinks.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-[#2A2A32] rounded-lg hover:bg-[#33333C] transition-colors"
                >
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-white">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
