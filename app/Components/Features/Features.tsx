import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

function Features() {
  return (
    <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 pt-0">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[#024E44] text-sm sm:text-base font-medium mb-3">
            Features Of Ajo
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#03413F]">
            Why does Ajo Stand Out ?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Feature 1 - Track Every Naira */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"> {/* Changed to items-stretch */}
            {/* Image */}
            <div className="order-2 lg:order-1 flex">
              <div className="bg-[#FBFFEE] rounded-3xl p-6 sm:p-8 lg:p-12 w-full flex items-center justify-center">
                <Image
                  src="/resource/track.svg"
                  alt="Circle Details"
                  className="w-full h-auto max-w-md"
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 flex">
              <div className="bg-[#FBFCFD] p-6 sm:p-8 lg:p-10 rounded-xl w-full flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                  Track Every Naira
                  <br />
                  Effortlessly
                </h3>

                <p className="text-[#363D4F] text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                  Every contribution, payout, and withdrawal is logged automatically. 
                  With Ajo, your full transaction timeline is clear and easy to follow — 
                  no confusion, no missing funds.
                </p>

                <button className="bg-[#CBEB6D] hover:bg-green-400 text-gray-900 px-6 sm:px-8 py-3 rounded-lg flex items-center gap-2 transition font-medium text-base sm:text-lg mx-auto lg:mx-0 w-fit">
                  Get Ajo App
                  <Image
                    src="/resource/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Feature 2 - Community Driven */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"> {/* Changed to items-stretch */}
            {/* Content */}
            <div className="flex">
              <div className="bg-[#FBFCFD] p-6 sm:p-8 lg:p-10 rounded-xl w-full flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                  Community-Driven —<br />
                  Save with people you<br />
                  know and trust.
                </h3>

                <p className="text-[#363D4F] text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                  Ajo is all about trust and Culture. This feature helps you save with 
                  friends, family and loved ones.
                </p>

                {/* Features List */}
                <div className="space-y-4 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Image
                      src="/resource/checkmark.svg"
                      alt="checkmark"
                      width={24}
                      height={24}
                    />
                    <p className="text-[#060B13] text-base sm:text-lg text-left">
                      Join trusted circles made up of friends.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Image
                      src="/resource/checkmark.svg"
                      alt="checkmark"
                      width={24}
                      height={24}
                    />
                    <p className="text-[#060B13] text-base sm:text-lg text-left">
                      Save with your people, the ones you actually trust.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Image
                      src="/resource/checkmark.svg"
                      alt="checkmark"
                      width={24}
                      height={24}
                    />
                    <p className="text-[#060B13] text-base sm:text-lg text-left">
                      Build circles with trusted people, contribute together
                    </p>
                  </div>
                </div>

                <button className="bg-[#CBEB6D] hover:bg-green-400 text-gray-900 px-6 sm:px-8 py-3 rounded-lg flex items-center gap-2 transition font-medium text-base sm:text-lg mx-auto lg:mx-0 w-fit">
                  Get Ajo App
                  <Image
                    src="/resource/arrow-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex">
              <div className="bg-[#FBFFEE] rounded-3xl p-6 sm:p-8 lg:p-12 w-full flex items-center justify-center">
                <Image
                  src="/resource/community.svg"
                  alt="Circle Details"
                  className="w-full h-auto max-w-md"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;