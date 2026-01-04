'use client';

import Image from 'next/image';
import ContactForm from '@/app/components/contact-form';
import CalcomButton from '@/app/components/CalcomButton';
import { Mail, MapPin, Clock, Instagram, Calendar, ArrowRight } from 'lucide-react';

const ContactPage = () => {

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Decorative Contact Icon - top right */}
      <div className="absolute -right-12 top-8 opacity-15 pointer-events-none hidden lg:block">
        <div className="relative w-[374px] h-[374px]">
          <Image
            src="/images/icon_contact.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 374px"
            className="object-contain"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      {/* Decorative Contact Icon - bottom left */}
      <div className="absolute -left-8 bottom-24 opacity-10 pointer-events-none hidden lg:block">
        <div className="relative w-[290px] h-[290px]">
          <Image
            src="/images/icon_contact.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 290px"
            className="object-contain"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's <span style={{ color: '#c96a3b' }}>Connect</span>
          </h1>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch and I'll show you 
            exactly how AI can save you time, money, and help you stay ahead of the competition.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="p-4 rounded-full w-fit mx-auto mb-4" style={{ backgroundColor: '#c96a3b' }}>
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Get in touch directly</p>
            <a
              href="mailto:info@small-ai.com"
              className="font-medium hover:opacity-80 transition-colors"
              style={{ color: '#c96a3b' }}
            >
              info@small-ai.com
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <div className="p-4 rounded-full w-fit mx-auto mb-4" style={{ backgroundColor: '#c96a3b' }}>
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Location</h3>
            <p className="text-gray-600 mb-4">Local expertise you can trust</p>
            <span className="text-[#0D0D0D] font-medium">Avalon</span>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <div className="p-4 rounded-full w-fit mx-auto mb-4" style={{ backgroundColor: '#c96a3b' }}>
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">Response Time</h3>
            <p className="text-gray-600 mb-4">Quick turnaround guaranteed</p>
            <span className="text-[#0D0D0D] font-medium">Within 24 hours</span>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Booking Section */}
          <div className="bg-white rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="p-4 rounded-full w-fit mx-auto mb-4" style={{ backgroundColor: '#c96a3b' }}>
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">
                Book Your Free Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to get started? Schedule a free 30-minute consultation to discuss 
                your specific AI needs and get personalized recommendations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-semibold text-[#0D0D0D]">Free Consultation</h4>
                  <p className="text-sm text-gray-600">30 minutes • Virtual or In-person</p>
                </div>
                <CalcomButton
                  buttonText="Book Now"
                  buttonClass="bg-[#0D0D0D] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0D0D0D]/90 transition-colors flex items-center space-x-2"
                  calLink="mark-s28jyk/book-a-discovery-call"
                  calNamespace=""
                  calConfig='{"layout":"month_view"}'
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-semibold text-[#0D0D0D]">AI Readiness Assessment</h4>
                  <p className="text-sm text-gray-600">45 minutes • Comprehensive review</p>
                </div>
                <CalcomButton
                  buttonText="Book Now"
                  buttonClass="bg-[#c96a3b] text-[#0D0D0D] px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  calLink="mark-s28jyk/book-a-discovery-call"
                  calNamespace=""
                  calConfig='{"layout":"month_view"}'
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>What to expect:</strong> We'll discuss your current processes, 
                identify AI opportunities, and create a tailored action plan for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Follow on Social Media</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/64Burgesroad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full hover:bg-[#c96a3b] transition-colors group"
            >
              <Instagram className="text-[#0D0D0D] group-hover:text-white" size={24} />
            </a>
            <a
              href="https://instagram.com/Marklionelhenry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full hover:bg-[#c96a3b] transition-colors group"
            >
              <Instagram className="text-[#0D0D0D] group-hover:text-white" size={24} />
            </a>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="mt-16 bg-[#1A1A1A] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prefer a Quick Call?
          </h3>
          <p className="text-[#BDBDBD] mb-6">
            Sometimes it's easier to just have a conversation. Book a free 15-minute 
            discovery call to see if AI is right for your business.
          </p>
          <a
            href="mailto:mcollis56@gmail.com?subject=Quick Call Request&body=Hi Mark, I'd like to schedule a quick call to discuss AI for my business."
            className="btn-primary"
          >
            Request Quick Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
