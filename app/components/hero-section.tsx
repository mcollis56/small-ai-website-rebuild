
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
      {/* Hero Mascot - positioned right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block pointer-events-none">
        <div className="relative w-[500px] h-[600px]">
          <Image
            src="/images/Mascot.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-contain"
            style={{ background: 'transparent' }}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Made Simple for
              <span className="text-[#FFE36E]"> Small Businesses</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#BDBDBD] mb-8 max-w-2xl">
              Save time, save money, and stay ahead without the headache. 
              No tech jargon — just solutions that work for your business.
            </p>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-2 rounded-full">
                  <Clock className="text-[#0D0D0D]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Save Time</h3>
                  <p className="text-[#BDBDBD] text-sm">Automate repetitive tasks</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-2 rounded-full">
                  <DollarSign className="text-[#0D0D0D]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Save Money</h3>
                  <p className="text-[#BDBDBD] text-sm">Cut operational costs</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-2 rounded-full">
                  <TrendingUp className="text-[#0D0D0D]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Stay Ahead</h3>
                  <p className="text-[#BDBDBD] text-sm">Keep competitive edge</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore AI Kits</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link href="/contact" className="btn-outline">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
