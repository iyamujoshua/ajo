import React from "react";
import { Users, Star } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { GradualSpacing } from "../Headinganimate";
import BrandSection from "../brandcomponents";
function Hero() {
  return (
    <section className="bg-white py-12 px-4 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8">
            {/* Bringing the spirit of{" "} */}
            <GradualSpacing text="Bringing the spirit of" />
            <span className="relative inline-block">
              Ajo
              <Image
                src="/resource/ajoline.svg"
                width={137}
                height={11}
                alt="brush-underline"
              />
            </span>
            <br />
            online.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
            Save, contribute, and withdraw with trusted people. Ajo makes group
            savings transparent and secure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="bg-[#CBEB6D] hover:bg-[#024E44] text-gray-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-[8] flex items-center gap-2 transition font-medium text-base sm:text-lg w-full sm:w-auto justify-center">
              Get Ajo App
              <Image
                src="/resource/arrow-right.svg"
                height={24}
                width={24}
                alt="arrow-right"
              />
            </button>
            <button className="text-[#045044] hover:text-[#024E44] font-medium text-base sm:text-lg transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-0">
            {/* Left column - cards */}
            <div className="space-y-6 lg:space-y-8">
              <div className="max-w-sm mx-auto md:mx-0 md:ml-auto">
                <Image
                  src="/resource/active-circle.svg"
                  alt="100+ Active Circles"
                  height={94}
                  width={242}
                />
              </div>

              <div className="max-w-sm mx-auto md:mx-0 md:ml-auto">
                <Image
                  src="/resource/future.svg"
                  alt="The Future of Rotational Savings"
                  width={273.86}
                  height={93.41}
                 
                />
              </div>
            </div>

            {/* Center column - hand image */}
            <div className="flex items-center justify-center py-8 md:py-0">
              <div className="relative w-80 lg:w-96 xl:w-108">
                <Image
                  src="/resource/Ajohand.svg"
                  alt="Ajo App on Phone"
                  width={540}
                  height={715.08}
                />
              </div>
            </div>

            {/* Right column - cards */}
            <div className="space-y-6 lg:space-y-8 md:mt-12 lg:mt-16">
              <div className="max-w-sm mx-auto md:mx-0 md:mr-auto">
                <Image
                  src="/resource/200happyusers.svg"
                  alt="200+ Happy Users"
                  width={389.66}
                  height={97.4}
                />
              </div>

              <div className="max-w-sm mx-auto md:mx-0 md:mr-auto">
                <Image
                  src="/resource/fastSecure.svg"
                  alt="Fast, Secure, Automated Payouts"
                  width={278}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>

        <BrandSection />

      </div>
    </section>
  );
}

export default Hero;
