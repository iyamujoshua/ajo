'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonies() {
  // Data for the testimonials
  const testimonials = [
    {
      id: 1,
      name: "Kay",
      title: "Market Vendor, Abuja",
      image: "/resource/user1.svg",
    },
    {
      id: 2,
      name: "Chisom",
      title: "Trader in Lagos",
      image: "/resource/user2.svg",
    },
    {
      id: 3,
      name: "Dera",
      title: "Student & Freelancer",
      image: "/resource/user3.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:py-20 md:py-24 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <p className="bg-gray-50 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm inline-flex">
          User Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#0A3930] leading-snug max-w-4xl mx-auto mb-16 sm:mb-20">
          Ajo helped me stay consistent with savings. I finally hit my business target!
        </h2>

        {/* Testimonial Carousel Area */}
        <div className="relative flex items-center justify-center w-full">
          
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            aria-label="Previous Testimonial"
            className="hidden sm:block absolute left-0 md:left-8 lg:left-16 p-3 rounded-full text-gray-600 hover:text-[#0A3930] hover:bg-gray-100 transition duration-200 focus:outline-none z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Testimonial Cards */}
          <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 max-w-full overflow-x-auto p-4">
            {testimonials.map((testimony, index) => {
              const isCurrent = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (currentIndex + 1) % testimonials.length;
              
              // Hide testimonials that aren't adjacent to current
              if (!isCurrent && !isPrev && !isNext) {
                return null;
              }

              return (
                <div
                  key={testimony.id}
                  className={`flex-shrink-0 flex flex-col items-center transition-all duration-500 ease-in-out ${
                    isCurrent
                      ? 'scale-100 w-[240px] md:w-[320px] lg:w-[360px] opacity-100'
                      : 'scale-90 w-[180px] md:w-[240px] lg:w-[280px] opacity-70'
                  }`}
                >
                  {/* User Image */}
                  <div 
                    className={`relative overflow-hidden rounded-3xl shadow-xl border-4 transition-all duration-500 ${
                      isCurrent ? 'border-[#0A3930]' : 'border-transparent'
                    }`}
                    style={{ 
                      paddingTop: isCurrent ? '100%' : '110%', 
                      width: '100%', 
                      height: 0 
                    }}
                  >
                    <img
                      src={testimony.image}
                      alt={`Testimonial from ${testimony.name}`}
                      className="absolute inset-0 w-full h-full object-cover transition duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Name and Title */}
                  <div 
                    className={`mt-4 pt-2 transition-all duration-500 ${
                      isCurrent 
                        ? 'opacity-100 max-h-20' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-lg font-semibold text-[#2D2D2D]">{testimony.name}</p>
                    <p className="text-sm text-gray-500">{testimony.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="hidden sm:block absolute right-0 md:right-8 lg:right-16 p-3 rounded-full text-gray-600 hover:text-[#0A3930] hover:bg-gray-100 transition duration-200 focus:outline-none z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        
        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#0A3930] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
}