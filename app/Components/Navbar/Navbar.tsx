"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/resource/ajologo.png"
                height={44}
                width={44}
                alt="logo"
              />
            </div>
            <span className="text-[#CBEB6D] text-2xl font-bold">Ajo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Contact
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Blog
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-[#CBEB6D] hover:bg-green-400 text-gray-800 px-4 py-3 rounded-[8] flex items-center gap-2 transition">
              Get Ajo App
              <Image
                src="/resource/arrow-right.svg"
                height={24}
                width={24}
                alt="arrow-right"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-4 py-2 rounded-lg transition"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-4 py-2 rounded-lg transition"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-4 py-2 rounded-lg transition"
              >
                Contact
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-4 py-2 rounded-lg transition"
              >
                Blog
              </a>
              <button className="bg-[#CBEB6D] hover:bg-green-400 text-gray-800 px-6 py-2 rounded-full flex items-center justify-center gap-2 transition mt-2">
                Get Ajo App
                <Image
                  src="/resource/arrow-right.svg"
                  height={24}
                  width={24}
                  alt="arrow-right"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
