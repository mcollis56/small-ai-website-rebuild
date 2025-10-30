
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Scissors, Flower, Wrench } from 'lucide-react';

const UseCaseGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.use-case-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 300);
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

  const useCases = [
    {
      icon: Scissors,
      title: 'Barber Shop',
      image: '/images/barber.jpg',
      description: 'Automate appointment booking, send reminder texts, and manage customer preferences with AI.',
      benefits: ['24/7 booking', 'Automated reminders', 'Customer insights']
    },
    {
      icon: Flower,
      title: 'Florist Business',
      image: '/images/florist.jpg',
      description: 'Generate seasonal content, manage inventory alerts, and create personalized flower recommendations.',
      benefits: ['Content creation', 'Inventory management', 'Personalization']
    },
    {
      icon: Wrench,
      title: 'Plumber Services',
      image: '/images/plumber.jpg',
      description: 'Schedule emergency calls, generate service quotes, and maintain customer service history.',
      benefits: ['Emergency scheduling', 'Quote generation', 'Service tracking']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#1A1A1A]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Solutions for <span className="text-[#FFE36E]">Every Business</span>
          </h2>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            See how different small businesses are using AI to streamline operations 
            and improve customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="use-case-item scroll-animation group"
            >
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D]/40 group-hover:bg-[#0D0D0D]/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 bg-[#FFE36E] p-2 rounded-full">
                    <useCase.icon className="text-[#0D0D0D]" size={20} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0D0D0D] mb-3">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-[#FFE36E] rounded-full mr-2"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGallery;
