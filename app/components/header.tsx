'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="container-custom py-4">
        <div className="factory-block bg-[#fffdf5] px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/" className="text-xl font-black uppercase tracking-[0.12em] text-[#1a1a1a]">
              Small-AI HQ
            </Link>
            <nav className="flex flex-wrap items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-pill ${pathname === item.href ? 'nav-pill-active' : 'nav-pill-idle'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <button
              className="btn-primary text-sm"
              data-cal-namespace=""
              data-cal-link="mark-s28jyk/book-a-discovery-call"
              data-cal-config='{"layout":"month_view"}'
            >
              Start Build Sprint
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
