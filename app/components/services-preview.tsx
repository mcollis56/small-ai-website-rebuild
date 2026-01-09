
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PaymentWidget from './payment-widget';
import {
  Bot,
  MessageSquare,
  PenTool,
  Search,
  Check,
  ArrowRight,
  Calendar,
  CreditCard,
  Clock,
  Users,
  Star,
  Zap
} from 'lucide-react';

const ServicesPreview = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [currentPaymentService, setCurrentPaymentService] = useState<any>(null);

  const handleBooking = () => {
    // Try to open Cal.com modal programmatically
    if (typeof window !== 'undefined') {
      const Cal = (window as any).Cal;
      if (Cal) {
        Cal('openModal', {
          calLink: 'mark-s28jyk/book-a-discovery-call',
          config: { layout: 'month_view' }
        });
      } else {
        console.error('Cal.com not loaded');
        // Fallback: open in new window
        window.open('https://cal.com/mark-s28jyk/book-a-discovery-call', '_blank');
      }
    }
  };

  const services = [
    {
      id: 'ai-basics',
      icon: Bot,
      title: 'Online Tutorial',
      price: 99,
      duration: '2 hours',
      format: 'Online',
      image: 'https://static.vecteezy.com/system/resources/previews/030/196/779/large_2x/group-of-happy-diverse-business-people-professional-career-office-team-generative-ai-photo.jpg',
      description: 'Online Tutorial on AI and LLMs (ChatGPT, Claude, DeepSeek) and how they can benefit your business.',
      features: [
        'Introduction to AI and machine learning concepts',
        'Overview of popular AI tools (ChatGPT, Claude, DeepSeek)',
        'Real business use cases and examples',
        'Q&A session with AI expert',
        'Resource pack with guides and templates',
        '30-day email support included'
      ],
      popular: true,
      comingSoon: true,
      calComUrl: 'https://cal.com/mark-s28jyk/discovery-call'
    },
    {
      id: 'purpose-built-agent',
      icon: Zap,
      title: 'Purpose Built Agent Just for You',
      price: 299,
      duration: '3-4 hours',
      format: 'Online + Follow-up',
      image: 'https://img.freepik.com/premium-photo/3d-rendering-humanoid-robot-working-with-laptop-computer-modern-office-room_934652-3697.jpg',
      description: 'Get a custom AI agent built specifically for your business challenges. No generic solutions - just a tailored AI assistant that understands your unique needs and solves your specific problems.',
      features: [
        'Deep dive into your specific business pain points',
        'Custom AI agent designed and built for your needs',
        'Training on how to use and optimize your new agent',
        'Integration guidance for your existing workflows',
        'Plain English documentation and instructions',
        '60-day support and refinement included'
      ],
      popular: true,
      calComUrl: 'https://cal.com/mark-s28jyk/discovery-call'
    },
    {
      id: 'consultation',
      icon: Search,
      title: 'AI Audit & Consultation',
      price: 499,
      duration: '3-4 hours',
      format: 'In-person',
      image: 'https://thumbs.dreamstime.com/b/business-team-analyzing-data-charts-modern-office-meeting-business-team-analyzing-data-charts-modern-office-meeting-343579857.jpg',
      description: 'In-person audit, consultation, and a customized AI roadmap for your business.',
      features: [
        'Complete business process analysis',
        'AI opportunity identification',
        'Custom implementation roadmap',
        'ROI projections and timeline',
        'Tool recommendations and vendor selection',
        '90-day follow-up support included'
      ],
      popular: false,
      calComUrl: 'https://cal.com/mark-s28jyk/discovery-call'
    }
  ];

  const handlePayment = (service: any) => {
    setCurrentPaymentService(service);
    setShowPayment(true);
  };

  const closePayment = () => {
    setShowPayment(false);
    setCurrentPaymentService(null);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span style={{ color: '#c96a3b' }}>Services</span>
          </h1>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            Choose the perfect AI workshop or consultation to transform your business.
            All services include hands-on learning and practical implementation guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative"
            >
              {service.popular && (
                <div className="absolute z-10 top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 text-white" style={{ backgroundColor: '#c96a3b' }}>
                  <Star size={14} />
                  <span>Popular</span>
                </div>
              )}
              {service.comingSoon && (
                <div className="absolute z-10 top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold bg-[#FFE36E] text-[#0D0D0D]">
                  Coming Soon
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#c96a3b' }}>
                      <service.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0D0D0D]">
                        {service.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>{service.duration}</span>
                        <span>•</span>
                        <Users size={16} />
                        <span>{service.format}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#0D0D0D]">${service.price}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#0D0D0D] mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <Check className="mr-2 mt-0.5 flex-shrink-0" style={{ color: '#c96a3b' }} size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {service.id !== 'ai-basics' && (
                    <button
                      type="button"
                      onClick={handleBooking}
                      className="flex-1 bg-[#0D0D0D] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#0D0D0D]/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Calendar size={18} />
                      <span>Book Now</span>
                    </button>
                  )}
                  <button
                    onClick={() => handlePayment(service)}
                    className={`${service.id === 'ai-basics' ? 'w-full' : 'flex-1'} text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2`}
                    style={{ backgroundColor: '#c96a3b' }}
                  >
                    <CreditCard size={18} />
                    <span>Pay Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Resources CTA */}
        <div className="p-8 text-center rounded-xl" style={{ backgroundColor: '#c96a3b' }}>
          <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">
            Not Ready to Book? Start with Free Resources
          </h3>
          <p className="text-[#0D0D0D]/80 mb-6 max-w-2xl mx-auto">
            Download our free guides and take the AI readiness quiz to discover
            which solutions are perfect for your business.
          </p>
          <Link
            href="/resources"
            className="bg-[#0D0D0D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D0D0D]/90 transition-colors inline-flex items-center space-x-2"
          >
            <span>Access Free Resources</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Payment Widget */}
      {currentPaymentService && (
        <PaymentWidget
          isOpen={showPayment}
          onClose={closePayment}
          service={currentPaymentService}
        />
      )}
    </div>
  );
};

export default ServicesPreview;
