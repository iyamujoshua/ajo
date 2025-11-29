import React from 'react';
import { Users, Banknote, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
export default function Whychoseus() {
  const stats = [
    {
        icon: <Image src="/resource/5000.svg" height={24} width={24} alt='create-icon'/>,
      value: "5,000+",
      label: "Active users"
    },
    {
        icon: <Image src="/resource/status-up.svg" height={24} width={24} alt='create-icon'/>,
      value: "₦100M+",
      label: "In total Savings"
    },
    {
        icon: <Image src="/resource/secure.svg" height={24} width={24} alt='create-icon'/>,
      value: "Secure",
      label: "Integrated with Flutterwave & Paystack"
    }
  ];

  return (
    <section className="bg-[#FBFFEE] py-16 px-4 sm:py-20 md:py-24 lg:py-32 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="bg-white text-emerald-900 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm inline-flex">
          Why Choose Ajo ?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A3930] leading-tight mb-6 sm:mb-8">
          Trusted by Communities
          <br className="sm:hidden" /> Across Nigeria
        </h2>
        <p className="text-[#363D4F] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 sm:mb-16">
          Whether it's your office squad, your church group, or your neighborhood crew
          Ajo keeps every contribution safe and every payout fair.
        </p>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-3xl shadow-sm w-full max-w-xs transition-shadow duration-300 hover:shadow-md"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-[#0A3930] rounded-full flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A3930] mb-2 text-center">
                {stat.value}
              </h3>
              <p className="text-[#363D4F] text-base sm:text-lg text-center leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}