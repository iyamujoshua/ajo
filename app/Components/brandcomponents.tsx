'use client';
import React from 'react';
import Image from 'next/image';

const BrandSection = () => {
  const brands = [
    { name: 'CAMBRIAN', logo: '/resource/cambrain.svg' },
    { name: 'COMMVAULT', logo: '/resource/comvault.svg' },
    { name: 'Crompton', logo: '/resource/crompton.svg' },
    { name: 'SECLOCK', logo: '/resource/seclock.svg' },
    { name: '4Gsoftware', logo: '/resource/software.svg' },
    { name: 'aum', logo: '/resource/aumi.svg' }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className=" bg-white rounded-[full] text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-[#024E44] mb-4">
          Join Over 500 brands growing with Ajo worldwide
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px]"
            >
              {/* If you have brand logos */}
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="w-full h-auto max-h-12 sm:max-h-14 lg:max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              
              {/* Fallback text if logos aren't available */}
              {/* <div className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg text-center hover:text-gray-900 transition-colors">
                {brand.name}
              </div> */}
            </div>
          ))}
        </div>

  
      </div>

      {/* Add custom animation for marquee if needed */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandSection;