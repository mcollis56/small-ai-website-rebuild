
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MessageCircle, Star } from 'lucide-react';

const BookingSection = () => {

  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="text-[#FFE36E]"> Business with AI?</span>
            </h2>
            
            <p className="text-xl text-[#BDBDBD] mb-8">
              Book a free consultation and discover which AI solutions are perfect for your business.
              No technical knowledge required — just bring your business challenges.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-1 rounded-full">
                  <Star className="text-[#0D0D0D]" size={16} />
                </div>
                <span className="text-white">5-minute quiz reveals perfect AI tools for your business</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-1 rounded-full">
                  <MessageCircle className="text-[#0D0D0D]" size={16} />
                </div>
                <span className="text-white">Personalized recommendations for your industry</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFE36E] p-1 rounded-full">
                  <Calendar className="text-[#0D0D0D]" size={16} />
                </div>
                <span className="text-white">Free 30-minute consultation within 24 hours</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn-primary"
                data-cal-namespace=""
                data-cal-link="mark-s28jyk/book-a-discovery-call"
                data-cal-config='{"layout":"month_view"}'
              >
                Book Free Consultation
              </button>
              
              <Link href="/resources" className="btn-outline">
                Download Free Guide
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/your6-.jpeg"
                alt="Business consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-[#0D0D0D]">24hrs</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-[#FFE36E] p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-[#0D0D0D]">100%</div>
              <div className="text-sm text-[#0D0D0D]">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
