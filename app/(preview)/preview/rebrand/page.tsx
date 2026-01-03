'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Decorative elements
const Star = ({ x, y, size = 20, delay = 0 }: { x: number; y: number; size?: number; delay?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#fff"
    className="absolute animate-twinkle"
    style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
  >
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
  </svg>
);

const MusicNote = ({ x, y, size = 24, delay = 0 }: { x: number; y: number; size?: number; delay?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#fff"
    className="absolute animate-float"
    style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
  >
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

const Sparkle = ({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) => (
  <div
    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
    style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s`, animationDuration: '2s' }}
  />
);

// Service card in retro style
const RetroServiceCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  ctaText = 'Learn More'
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
}) => (
  <div className={`relative bg-[#F5E6D3] rounded-3xl p-6 transform hover:-translate-y-2 transition-all duration-300 border-4 border-[#1a1a1a] shadow-[8px_8px_0_#1a1a1a] hover:shadow-[12px_12px_0_#1a1a1a] ${popular ? 'ring-4 ring-[#BFFF00]' : ''}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#BFFF00] text-[#1a1a1a] px-4 py-1 rounded-full font-bold text-sm border-2 border-[#1a1a1a]">
        POPULAR
      </div>
    )}
    <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-2">{title}</h3>
    <div className="font-display text-4xl font-bold text-[#1a1a1a] mb-4">{price}</div>
    <p className="text-[#4a4a4a] mb-4 font-body">{description}</p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2 text-[#4a4a4a] font-body">
          <span className="text-[#4DA6A6] font-bold">&#10003;</span>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-[#BFFF00] text-[#1a1a1a] font-bold py-3 px-6 rounded-full border-3 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-display text-lg">
      {ctaText}
    </button>
  </div>
);

// Value prop badge
const ValueBadge = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="flex items-center gap-4 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
    <div className="w-14 h-14 bg-[#BFFF00] rounded-full flex items-center justify-center text-[#1a1a1a] text-2xl border-2 border-[#1a1a1a]">
      {icon}
    </div>
    <div>
      <div className="font-display font-bold text-white text-lg">{title}</div>
      <div className="text-[#9ca3af] font-body text-sm">{subtitle}</div>
    </div>
  </div>
);

export default function RebrandPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0D0D0D] overflow-hidden">
      {/* Custom styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap');

        .font-display {
          font-family: 'Fredoka', sans-serif;
        }

        .font-body {
          font-family: 'Nunito', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .curved-text {
          font-family: 'Fredoka', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#7DD3D3] border-2 border-[#1a1a1a] flex items-center justify-center">
              <span className="text-[#1a1a1a] font-bold text-xs">S</span>
            </div>
            <span className="font-display font-bold text-white text-xl">small-ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-body text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#" className="font-body text-white/80 hover:text-white transition-colors">Resources</a>
            <a href="#" className="font-body text-white/80 hover:text-white transition-colors">About</a>
            <a href="#" className="font-body text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          <button className="bg-[#BFFF00] text-[#1a1a1a] font-bold py-2 px-5 rounded-full border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] hover:shadow-[1px_1px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-display text-sm">
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Star x={10} y={20} size={16} delay={0} />
          <Star x={85} y={15} size={20} delay={0.5} />
          <Star x={15} y={70} size={14} delay={1} />
          <Star x={90} y={60} size={18} delay={1.5} />
          <Star x={50} y={10} size={12} delay={0.3} />
          <MusicNote x={5} y={40} size={28} delay={0.2} />
          <MusicNote x={92} y={35} size={24} delay={0.8} />
          <Sparkle x={20} y={30} delay={0.4} />
          <Sparkle x={80} y={25} delay={0.9} />
          <Sparkle x={70} y={75} delay={1.2} />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Curved logo text */}
            <div className="relative">
              <svg viewBox="0 0 300 80" className="w-full max-w-md">
                <defs>
                  <path id="curve" d="M 20 60 Q 150 10 280 60" fill="none" />
                </defs>
                <text className="font-display" fill="#fff" fontSize="42" fontWeight="700">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    small-ai
                  </textPath>
                </text>
              </svg>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
              AI Made Simple for{' '}
              <span className="text-[#BFFF00]">Small Businesses</span>
            </h1>

            <p className="font-body text-xl text-[#9ca3af] max-w-lg">
              No tech jargon. No complexity. Just practical AI solutions that save you time, money, and help you stay ahead of the competition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#BFFF00] text-[#1a1a1a] font-bold py-4 px-8 rounded-full border-3 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] hover:shadow-[3px_3px_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-display text-lg">
                Find Your AI Solution
              </button>
              <button className="bg-transparent text-white font-bold py-4 px-8 rounded-full border-3 border-white/30 hover:border-white/60 transition-all font-display text-lg">
                Watch Demo
              </button>
            </div>

            {/* Value props */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              <ValueBadge
                icon="⏱"
                title="Save Time"
                subtitle="Automate the boring stuff"
              />
              <ValueBadge
                icon="💰"
                title="Save Money"
                subtitle="Cut operational costs"
              />
              <ValueBadge
                icon="📈"
                title="Stay Ahead"
                subtitle="Outpace competitors"
              />
            </div>
          </div>

          {/* Right side - Mascot */}
          <div className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            {/* The mascot image - includes the floating taglines already */}
            <div className="relative">
              <Image
                src="/images/Mascot.png"
                alt="small-ai mascot - friendly globe character"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              AI Services That{' '}
              <span className="text-[#7DD3D3]">Actually Work</span>
            </h2>
            <p className="font-body text-xl text-[#9ca3af] max-w-2xl mx-auto">
              No fluff. No complicated setups. Just real solutions for real businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RetroServiceCard
              title="Online Tutorial"
              price="$99"
              description="Learn AI fundamentals and start using tools like ChatGPT for your business."
              features={[
                "2-hour interactive session",
                "ChatGPT, Claude & more",
                "Real business examples",
                "30-day email support"
              ]}
              popular={true}
              ctaText="Get Started"
            />

            <RetroServiceCard
              title="Custom AI Agent"
              price="$299"
              description="Get a purpose-built AI assistant designed specifically for your business needs."
              features={[
                "Personalized AI solution",
                "Built for your workflow",
                "Training included",
                "60-day support"
              ]}
              ctaText="Build My Agent"
            />

            <RetroServiceCard
              title="AI Audit"
              price="$499"
              description="In-person consultation and customized AI roadmap for your business."
              features={[
                "Deep business analysis",
                "AI opportunity mapping",
                "Implementation plan",
                "Ongoing guidance"
              ]}
              ctaText="Book Audit"
            />
          </div>
        </div>
      </section>

      {/* Social Proof / Features */}
      <section className="py-20 px-6 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
              Why Small Businesses{' '}
              <span className="text-[#4DA6A6]">Love Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🎯', stat: '500+', label: 'Businesses Helped' },
              { emoji: '⭐', stat: '100%', label: 'Satisfaction Rate' },
              { emoji: '🚀', stat: '40%', label: 'Average Time Saved' },
              { emoji: '💡', stat: '10+', label: 'Years Experience' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center border-3 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a] hover:shadow-[3px_3px_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="font-display text-3xl font-bold text-[#1a1a1a]">{item.stat}</div>
                <div className="font-body text-[#4a4a4a]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#0D0D0D] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Star x={5} y={20} size={30} delay={0} />
          <Star x={95} y={80} size={25} delay={0.5} />
          <MusicNote x={10} y={70} size={40} delay={0.3} />
          <MusicNote x={85} y={20} size={35} delay={0.7} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make AI Work for{' '}
            <span className="text-[#BFFF00]">Your Business?</span>
          </h2>
          <p className="font-body text-xl text-[#9ca3af] mb-8 max-w-2xl mx-auto">
            Book a free 15-minute call to discover how AI can transform your daily operations.
          </p>
          <button className="bg-[#BFFF00] text-[#1a1a1a] font-bold py-4 px-10 rounded-full border-3 border-[#1a1a1a] shadow-[6px_6px_0_#fff] hover:shadow-[3px_3px_0_#fff] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-display text-xl">
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1a1a1a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#7DD3D3] border-2 border-[#1a1a1a] flex items-center justify-center">
                <span className="text-[#1a1a1a] font-bold text-xs">S</span>
              </div>
              <span className="font-display font-bold text-white text-xl">small-ai</span>
            </div>
            <p className="font-body text-[#9ca3af] text-center">
              Making AI simple for small businesses since 2020
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-white/60 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="font-body text-white/60 hover:text-white transition-colors">Terms</a>
              <a href="#" className="font-body text-white/60 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to current site link */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/"
          className="bg-white/10 backdrop-blur-md text-white font-body py-2 px-4 rounded-full border border-white/20 hover:bg-white/20 transition-all text-sm"
        >
          ← Back to Current Site
        </Link>
      </div>
    </main>
  );
}
