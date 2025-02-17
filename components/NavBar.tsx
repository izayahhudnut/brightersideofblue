'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import Button from "./ui/mainbutton"
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showEpisodesPopup, setShowEpisodesPopup] = useState(false)
  const pathname = usePathname()

  const platformLinks = [
    { 
      name: 'Spotify', 
      image: '/miniyoutube.svg', 
      href: 'https://open.spotify.com/show/5SapJxcx9ZM9s7D1zEgryh' 
    },
    { 
      name: 'YouTube', 
      image: '/minitiktok.svg', 
      href: 'https://www.youtube.com/channel/UCyxANUH2srMZdE_kOWpWTyg' 
    },
    { 
      name: 'TikTok', 
      image: '/miniapple.svg', 
      href: 'https://www.tiktok.com/@brightersideofblue' 
    },
    { 
      name: 'Apple Podcast', 
      image: '/minispotify.svg', 
      href: 'https://podcasts.apple.com/us/podcast/the-brighter-side-of-blue-podcast/id1715141379' 
    },
  ]

  // Updated nav links with explicit href for popup links
  const navLinks: { href: string; text: string; isPopup?: boolean }[] = [
    { href: "/", text: "Home" },
    { href: pathname === '/partner' ? '/#about' : '#about', text: "About" },
    { href: '#', text: "Episodes", isPopup: true },
    { href: "/blog", text: "Blogs" },
    { href: pathname === '/partner' ? '/#contact' : '#contact', text: "Contact" },
  ]

  const handleEpisodesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowEpisodesPopup(true)
    setIsMenuOpen(false) // Close mobile menu on click
  }

  return (
    <nav className="relative bg-[#222128]" >
      <div className="flex flex-row justify-between items-center mx-auto w-full px-4 md:w-[80%] py-5">
        {/* Logo linking to home */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={230}
            height={50}
            className="w-32 md:w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.text}
              href={link.href} 
              onClick={link.isPopup ? handleEpisodesClick : undefined}
              className="text-white text-lg hover:text-gray-300 hover:cursor-pointer transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Sponsor Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/partner">
            <Button text="Sponsor" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden 
        fixed 
        inset-0 
        z-50 
        bg-[#222128] 
        transform 
        transition-transform 
        duration-300 
        ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <button 
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center pt-20 space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.text}
              href={link.href} 
              onClick={link.isPopup ? handleEpisodesClick : () => setIsMenuOpen(false)}
              className="text-white text-lg hover:text-gray-300 hover:cursor-pointer transition-colors"
            >
              {link.text}
            </Link>
          ))}
          <div className="pt-8">
            <Link href="/partner" onClick={() => setIsMenuOpen(false)}>
              <Button text="Sponsor" />
            </Link>
          </div>
        </div>
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
    </nav>
  )
}
