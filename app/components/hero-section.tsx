'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
      {/* Content Grid - Two Column Layout */}
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              AI Made Simple for
              <span className="text-[#FFE36E]"> Small Businesses</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-[#BDBDBD] mb-8 max-w-xl">
              Save time, save money, and stay ahead without the headache. 
              No tech jargon — just solutions that work for your business.
            </p>

            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-2 rounded-full flex-shrink-0">
                  <Clock className="text-[#0D0D0D]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Save Time</h3>
                  <p className="text-[#BDBDBD] text-xs sm:text-sm">Automate repetitive tasks</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-2 rounded-full flex-shrink-0">
                  <DollarSign className="text-[#0D0D0D]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Save Money</h3>
                  <p className="text-[#BDBDBD] text-xs sm:text-sm">Cut operational costs</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-2 rounded-full flex-shrink-0">
                  <TrendingUp className="text-[#0D0D0D]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Stay Ahead</h3>
                  <p className="text-[#BDBDBD] text-xs sm:text-sm">Keep competitive edge</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Explore AI Kits</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link href="/contact" className="btn-outline text-center">
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Right Column - Mascot */}
          <div className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/images/Mascot.png"
                alt="Small AI Mascot"
                fill
                sizes="(max-width: 1024px) 0vw, 500px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Mobile Mascot - Shows below text on mobile */}
          <div className={`lg:hidden flex justify-center mt-8 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/images/Mascot.png"
                alt="Small AI Mascot"
                fill
                sizes="320px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
