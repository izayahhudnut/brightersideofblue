'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  const pathname = usePathname();
  const contactLink = pathname === '/partner' ? '/#contact' : '#contact';

  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="w-[80%] mx-auto">
        <div className="container mx-auto">
          {/* Mobile Layout (hidden on desktop) */}
          <div className="md:hidden flex flex-col gap-8">
            {/* Logo Section Mobile */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={230}
                  height={50}
                  className="w-48"
                />
              </div>
              <p className="text-sm leading-6">
                Illuminating the positive impact of law enforcement through compelling stories and interviews. 
                Our podcast brings you inside the world of policing, showcasing the dedication, bravery, and 
                human side of those who serve and protect our communities.
              </p>
            </div>
            
            {/* Lists Container Mobile */}
            <div className="grid grid-cols-2 gap-8">
              {/* Company Section */}
              <div className="flex flex-col items-center">
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-center">
                  <li><a href="#" className="hover:text-blue-400">About us</a></li>
                  <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                  <li><Link href={contactLink} className="hover:text-blue-400">Contact</Link></li>
                </ul>
              </div>

              {/* Social Media Section */}
              <div className="flex flex-col items-center">
                <h3 className="text-white font-semibold mb-4">Social Media</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <FaFacebook className="text-xl" />
                    <a href="https://www.facebook.com/p/The-Brighter-Side-of-Blue-61550540044972/" className="hover:text-blue-400">Facebook</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaXTwitter className="text-xl" />
                    <a href="https://twitter.com/TBSOB_podcast" className="hover:text-blue-400">X</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaInstagram className="text-xl" />
                    <a href="https://www.instagram.com/thebrightersideofblue/" className="hover:text-blue-400">Instagram</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaTiktok className="text-xl" />
                    <a href="https://www.tiktok.com/@brightersideofblue" className="hover:text-blue-400">TikTok</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaYoutube className="text-xl" />
                    <a href="https://www.youtube.com/channel/UCyxANUH2srMZdE_kOWpWTyg" className="hover:text-blue-400">YouTube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Layout (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* Logo and About Section */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={230}
                  height={50}
                />
              </div>
              <p className="text-sm leading-6">
                Illuminating the positive impact of law enforcement through compelling stories and interviews. 
                Our podcast brings you inside the world of policing, showcasing the dedication, bravery, and 
                human side of those who serve and protect our communities.
              </p>
            </div>

            {/* Company Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About us</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><Link href={contactLink} className="hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-white font-semibold mb-4">Social Media</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaFacebook className="text-xl" />
                  <a href="https://www.facebook.com/p/The-Brighter-Side-of-Blue-61550540044972/" className="hover:text-blue-400">Facebook</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaXTwitter className="text-xl" />
                  <a href="https://twitter.com/TBSOB_podcast" className="hover:text-blue-400">X</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaInstagram className="text-xl" />
                  <a href="https://www.instagram.com/thebrightersideofblue/" className="hover:text-blue-400">Instagram</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTiktok className="text-xl" />
                  <a href="https://www.tiktok.com/@brightersideofblue" className="hover:text-blue-400">TikTok</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaYoutube className="text-xl" />
                  <a href="https://www.youtube.com/channel/UCyxANUH2srMZdE_kOWpWTyg" className="hover:text-blue-400">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-4 flex justify-between items-center">
          <p className="text-sm">
            &copy; 2025. All Rights Reserved. The Brighter Side of Blue Podcast
          </p>
          {/* Add an empty div to balance the layout */}
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;