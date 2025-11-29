import React from 'react';
import Image from 'next/image';
export default function Howitworks() {
  const steps = [
    {
      icon: <Image src="/resource/signup.svg" height={24} width={24} alt='create-icon'/>,
      title: "Sign Up",
      description: "Download the app and Create an account"
    },
    {
      icon: <Image src="/resource/create.svg" height={24} width={24} alt='create-icon'/>,
      title: "Create or Join a Circle",
      description: "Start a new Ajo or join one with friends, family, or colleagues."
    },
    {
      icon: <Image src="/resource/setcplan.svg" height={24} width={24} alt='create-icon'/>,
      title: "Set Contribution Plan",
      description: "Choose how much you want to contribute and how often."
    },
    {
      icon: <Image src="/resource/wallet.svg" height={24} width={24} alt='create-icon'/>,
      title: "Save Together",
      description: "Everyone contributes automatically no need to chase payments."
    },
    {
      icon: <Image src="/resource/dollar-circle.svg" height={24} width={24} alt='create-icon'/>,
      title: "Withdraw Your Turn",
      description: "When it's your turn, Ajo releases your funds safely and instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 font-sans flex flex-col items-center">
      
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12 text-center">
      <span className="bg-white text-emerald-900 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
          We Provide financial Services
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3930]">
          How Ajo Work ?
        </h1>
      </div>

      {/* Cards Container 
        Using flex-wrap and justify-center to achieve the 3-top, 2-bottom layout.
        The max-width is constrained to ensure only 3 fit on the top row on large screens.
      */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex flex-col items-start bg-[#FBFFEE] border border-[#E8EDEC] p-8 rounded-[24px] w-full sm:w-[350px] min-h-[280px] hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon Circle */}
            <div className="w-12 h-12 bg-[#03413F] rounded-full flex items-center justify-center mb-6">
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-[#423739] mb-3">
              {step.title}
            </h3>
            <p className="text-[#555555] leading-relaxed text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}