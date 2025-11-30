import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
        <img
          src="/resource/ajofooter.svg"
          alt="Ajo Footer Background"
          className="w-full max-w-4xl opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1 - Newsletter */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
            <Image
                src="/resource/ajologo.png"
                height={44}
                width={44}
                alt="logo"
              />
              <span className="text-2xl font-bold text-[#CBEB6D]">Ajo</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              <button
                aria-label="Twitter"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                <Twitter className="w-5 h-5 text-gray-700" />
              </button>
              <button
                aria-label="Instagram"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </button>
              <button
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Newsletter */}
            <h3 className="text-lg font-semibold text-[#131735] mb-4">
              Subscribe For Future Updates
            </h3>
            <div className="flex items-center bg-white rounded-full p-1 shadow-sm max-w-md">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#CBEB6D] hover:bg-[#b8d95f] text-[#03413F] px-6 py-2 rounded-full font-medium transition whitespace-nowrap">
                Sign up
              </button>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div>
            <h3 className="text-lg font-semibold text-[#03413F] mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-[#03413F]  mb-6">
              Solutions
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  Savings Circle
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  Auto Payout
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  Faq
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  Ajo Traking
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h3 className="text-lg font-semibold text-[#03413F] mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735]  hover:text-gray-900 transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735] hover:text-gray-900 transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#131735] hover:text-gray-900 transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#131735]">
          <a href="#" className="hover:text-gray-900 transition">
            Terms & Condition
          </a>
          <p>©2025 Ajo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
