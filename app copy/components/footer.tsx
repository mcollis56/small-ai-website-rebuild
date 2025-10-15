
import Link from 'next/link';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              small-ai
            </Link>
            <p className="text-[#BDBDBD] mb-6 max-w-md">
              Making AI simple and accessible for small business owners. 
              No tech jargon, just practical solutions that work.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/64Burgesroad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BDBDBD] hover:text-[#FFE36E] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://instagram.com/Marklionelhenry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BDBDBD] hover:text-[#FFE36E] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-[#BDBDBD] hover:text-white transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[#BDBDBD] hover:text-white transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#BDBDBD] hover:text-white transition-colors">
                  About Mark
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[#BDBDBD]">
                <Mail size={16} />
                <span>info@small-ai.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#BDBDBD]">
                <MapPin size={16} />
                <span>64 Burges Road</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-[#BDBDBD] text-sm">
            © {new Date().getFullYear()} small-ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
