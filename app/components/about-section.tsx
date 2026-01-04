'use client';

import Image from 'next/image';
import { Users, Heart, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96">
              <Image
                src="/images/Mascot.png"
                alt="Mark Collis - AI Action Figure"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hi, I'm Mark – Your AI Partner for Small Business Success
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With years of experience in advertising and telecoms, I've seen firsthand how
              technology can transform businesses. Now, I'm here to help small business
              owners like you harness the power of AI to save time, cut costs, and grow your
              business
            </p>

            <h3 className="text-2xl font-bold text-white mb-6">
              Why Choose Me?
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B5FC7] bg-opacity-20 p-2 rounded-lg">
                  <Users className="text-[#5B5FC7]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Tailored to You</h4>
                  <p className="text-gray-400">
                    I understand the unique challenges of small businesses and will show you how
                    AI can solve your specific problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#5B5FC7] bg-opacity-20 p-2 rounded-lg">
                  <Heart className="text-[#5B5FC7]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Hands-On Learning</h4>
                  <p className="text-gray-400">
                    My workshops and courses are designed to be interactive and easy to follow – no
                    fluff, just results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#5B5FC7] bg-opacity-20 p-2 rounded-lg">
                  <MapPin className="text-[#5B5FC7]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Local Expertise</h4>
                  <p className="text-gray-400">
                    I'm part of your community, and I'm here to help local businesses thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
