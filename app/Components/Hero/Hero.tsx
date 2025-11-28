import React from 'react';
import { Users, Star } from 'lucide-react';
import Image from 'next/image';
function Hero() {
  return (
    <section className="bg-white py-12 px-4 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8">
            Bringing the spirit of{' '}
            <span className="relative inline-block">
              Ajo
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C40 4 160 4 198 10"
                  stroke="#86efac"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            online.
          </h1>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
            Save, contribute, and withdraw with trusted people. Ajo makes group savings transparent and secure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="bg-[#CBEB6D] hover:bg-green-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-[8] flex items-center gap-2 transition font-medium text-base sm:text-lg w-full sm:w-auto justify-center">
              Get Ajo App
              <Image 
                src="/resource/arrow-right.svg"
                height={24}
                width={24}
                alt='arrow-right'
                />
            </button>
            <button className="text-[#045044] hover:text-teal-800 font-medium text-base sm:text-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Phone and Feature Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 md:mb-0">
            {/* Left Column */}
            <div className="space-y-6 lg:space-y-8">
              {/* 100+ Active Circles Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex items-center justify-between max-w-sm mx-auto md:mx-0 md:ml-auto">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">100+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Active Circles</div>
                </div>
                <div className="bg-gray-100 rounded-full p-3 sm:p-4">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
                </div>
              </div>

              {/* The Future of Rotational Savings Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-sm mx-auto md:mx-0 md:ml-auto">
                <h3 className="text-teal-800 font-semibold text-lg sm:text-xl">
                  The Future of Rotational Savings
                </h3>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8 md:mt-12 lg:mt-16">
              {/* 200+ Happy Users Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-sm mx-auto md:mx-0 md:mr-auto">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-gray-900 font-semibold text-base sm:text-lg mb-2">200+ Happy Users</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-orange-300 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                      +2
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast, Secure, Automated Payouts Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-sm mx-auto md:mx-0 md:mr-auto">
                <h3 className="text-teal-800 font-semibold text-lg sm:text-xl leading-tight">
                  Fast, Secure,<br />Automated Payouts
                </h3>
              </div>
            </div>
          </div>

          {/* Phone Mockup - Centered on Desktop, Hidden on Mobile */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-64 lg:w-80">
              {/* Add your phone image here */}
              <img 
                src="/path-to-your-phone-image.png" 
                alt="Ajo App on Phone"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;