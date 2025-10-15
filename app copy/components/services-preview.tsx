
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bot, Zap, Rocket } from 'lucide-react';

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openCalCom = () => {
    // Open Cal.com discovery call in a new window/tab
    window.open('https://cal.com/mark-s28jyk/discovery-call', '_blank', 'noopener,noreferrer');
  };

  const services = [
    {
      icon: Bot,
      title: 'Basic AI Setup',
      price: '$99',
      description: 'Perfect for getting started with AI in your business',
      features: ['AI readiness assessment', 'Tool recommendations', 'Basic implementation guide', '30-minute consultation'],
      buttonText: 'Get Started',
    },
    {
      icon: Zap,
      title: '🧠 Purpose-Built AI Agent – Done For You',
      price: '$299',
      description: 'Flat Fee | Fully Remote | Includes 30 Days of Support',
      features: ['A fully functional AI agent built around your business needs', 'Integration with your existing business workflows', 'Clear, jargon-free instructions for use', '30 days support'],
      buttonText: 'Call',
      isPopular: true,
    },
    {
      icon: Rocket,
      title: 'Complete AI Transformation',
      price: '$499',
      description: 'Comprehensive AI integration for your entire business',
      features: ['Complete business AI audit', 'Multiple AI agent implementation', 'Team training included', '90-day support package'],
      buttonText: 'Book Now',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#0D0D0D]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span style={{ color: '#c96a3b' }}>AI Services</span>
          </h2>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            We help small business owners harness the power of AI with practical, 
            actionable advice tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card scroll-animation bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${
                service.isPopular ? 'border-2' : ''
              }`}
              style={service.isPopular ? { borderColor: '#c96a3b' } : {}}
            >
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#c96a3b' }}>
                    Popular
                  </span>
                </div>
              )}
              
              <div className="p-3 rounded-full w-fit mb-4" style={{ backgroundColor: '#c96a3b' }}>
                {service.title.includes('🧠') ? (
                  <span className="text-white text-2xl">🧠</span>
                ) : (
                  <service.icon className="text-white" size={24} />
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-[#0D0D0D] mb-2">
                {service.title}
              </h3>
              
              <div className="text-2xl font-bold mb-3" style={{ color: '#c96a3b' }}>
                {service.price}
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-600 flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#c96a3b' }}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={openCalCom}
                className="w-full text-white py-2 px-4 rounded-full font-medium hover:opacity-90 transition-colors text-center"
                style={{ backgroundColor: '#c96a3b' }}
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
