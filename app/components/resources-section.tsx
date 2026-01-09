'use client';

import Image from 'next/image';
import Link from 'next/link';

const ResourcesSection = () => {
  const resources = [
    {
      title: 'Free Guide',
      subtitle: '"Demystifying AI"',
      description: 'Get to know the basics and how it can help your business.',
      cta: 'Download Now',
      detail: 'to transform your business operations.',
      icon: '/images/icon_resource.png',
      link: '/resources',
    },
    {
      title: 'Free Sheet',
      subtitle: '"How to Set Up a Basic AI Chatbot in 10 Minutes"',
      description: 'Quick, easy steps for beginners.',
      cta: 'Get your first',
      detail: 'AI tool running today!',
      icon: '/images/icon_chat.png',
      link: '/resources',
    },
    {
      title: 'Free Quiz',
      subtitle: '"Are You Ready for AI?"',
      description: 'Discover which AI solutions match your business needs.',
      cta: 'Take the quiz',
      detail: 'to find your perfect starting point.',
      icon: '/images/icon_ai_solution.png',
      link: '/ai-solution-finder',
    },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free Resources to Get You Started with AI
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Not ready to book a workshop or consultation? No problem! Start your AI journey with these helpful resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-gray-800 hover:border-[#5B5FC7] transition-all duration-300"
            >
              <div className="relative h-72 bg-gradient-to-br from-[#FFE36E]/10 to-transparent flex items-center justify-center">
                <div className="relative w-full h-full p-2">
                  <Image
                    src={resource.icon}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain"
                    style={{ background: 'transparent' }}
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {resource.title}
                </h3>

                <p className="text-lg font-semibold text-gray-300 mb-3">
                  {resource.subtitle}
                </p>

                <p className="text-gray-400 mb-4">
                  {resource.description}
                </p>

                <p className="text-gray-300">
                  <Link href={resource.link} className="text-[#5B5FC7] font-semibold hover:underline">
                    {resource.cta}
                  </Link>{' '}
                  {resource.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
