import CalcomButton from './CalcomButton';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              small-ai
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#resources" className="text-gray-700 hover:text-gray-900 transition-colors">
              Resources
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center">
            <CalcomButton buttonText="Book Free Consultation" />
          </div>
        </div>
      </div>
    </header>
  );
}
