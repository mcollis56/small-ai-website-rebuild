
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import CalcomButton from '@/app/components/CalcomButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'AI Solution Finder', href: '/ai-solution-finder' },
    { name: 'Chat', href: '/chat' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white hover:text-[#c96a3b] transition-colors">
            small-ai
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-pill ${
                  pathname === item.href ? 'nav-pill-active' : 'nav-pill-idle'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CalcomButton
              buttonText="Book Free Consultation"
              buttonClass="btn-primary"
              calLink="mark-s28jyk/book-a-discovery-call"
              calConfig='{"layout":"month_view"}'
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-md border-t border-white/10">
            <nav className="container-custom py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    pathname === item.href 
                      ? 'bg-white text-[#0D0D0D]' 
                      : 'text-[#BDBDBD] hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <CalcomButton
                  buttonText="Book Free Consultation"
                  buttonClass="btn-primary w-full text-center block"
                  calLink="mark-s28jyk/book-a-discovery-call"
                  calConfig='{"layout":"month_view"}'
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
