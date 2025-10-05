import CalcomButton from '@/components/CalcomButton';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              Small AI
            </a>
          </div>
          <nav className="hidden md:flex md:gap-x-8">
            <a href="/about" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
              About
            </a>
            <a href="/services" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
              Services
            </a>
            <a href="/ai-solution-finder" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
              AI Solution Finder
            </a>
            <a href="/resources" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
              Resources
            </a>
            <a href="/contact" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-x-4">
            <CalcomButton 
              buttonText="Book a Call"
              buttonClass="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
