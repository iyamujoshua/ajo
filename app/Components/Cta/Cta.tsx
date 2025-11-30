import React from 'react';
import { PlayCircle } from 'lucide-react';

// const MockImage = ({ src, alt, width, height, className }) => (
//   <img src={src} alt={alt} width={width} height={height} className={className} loading="lazy" />
// );
const MockImage = ({ src, alt, width, height, className }: { 
    src: string; 
    alt: string; 
    width: number; 
    height: number; 
    className?: string;
  }) => (
    <img src={src} alt={alt} width={width} height={height} className={className} loading="lazy" />
  );

export default function Cta() {
  return (
    <section className="bg-[#F8F8F8] py-16 px-4 sm:py-20 md:py-24 lg:py-32 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#03413F] rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-20 text-center text-white overflow-hidden shadow-2xl">
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Small Icon */}
            <div className="mb-6 flex items-center justify-center">
              <img
                src="/resource/ajologo.png"
                height={80}
                width={80}
                alt="logo"
              />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 max-w-4xl">
              Ready to start saving <br /> smarter?
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10">
              Join thousands of Nigerians already building trust and wealth <br /> with Ajo.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-[#CBEB6D] hover:bg-green-400 text-gray-900 px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition font-medium text-base sm:text-lg w-fit mx-auto sm:mx-0">
                Get Ajo App
                <MockImage
                  src="/resource/arrow-right.svg"
                  alt="Arrow right"
                  width={20}
                  height={20}
                />
              </button>
              <button className="bg-[#2D6C64] hover:bg-[#3b8c80] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition font-medium text-base sm:text-lg w-fit mx-auto sm:mx-0">
                Learn More
              </button>
            </div>
          </div>

          {/* Absolutely positioned images - Hidden on mobile */}
          {/* Image 11.svg (Top-Left) */}
          <div className="hidden md:block absolute top-7 left-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden z-0">
            <MockImage src="/resource/11.svg" alt="User 1" width={80} height={80} className="object-cover w-full h-full" />
          </div>
          {/* Image 22.svg (Mid-Left) */}
          <div className="hidden md:block absolute top-1/2 left-40 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden z-0">
            <MockImage src="/resource/22.svg" alt="User 2" width={80} height={80} className="object-cover w-full h-full" />
          </div>
          {/* Image 33.svg (Top-Right) */}
          <div className="hidden md:block absolute top-20 right-30 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden z-0">
            <MockImage src="/resource/33.svg" alt="User 4" width={80} height={80} className="object-cover w-full h-full" />
          </div>
          {/* Image 44.svg (Mid-Right) */}
          <div className="hidden md:block absolute bottom-1/4 right-15 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden z-0">
            <MockImage src="/resource/44.svg" alt="User 5" width={80} height={80} className="object-cover w-full h-full" />
          </div>
          {/* Image 55.svg (Bottom-Right) */}
          <div className="hidden lg:block absolute bottom-15 right-40 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden z-0">
            <MockImage src="/resource/55.svg" alt="User 6" width={80} height={80} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}