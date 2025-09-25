import BookButton from "./BookButton";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">small-ai</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#ai-solution-finder" className="text-gray-700 hover:text-gray-900 transition-colors">
              AI Solution Finder
            </a>
            <a href="#chat" className="text-gray-700 hover:text-gray-900 transition-colors">
              Chat
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
            <BookButton>Book Free Consultation</BookButton>
          </div>
        </div>
      </div>
    </header>
  );
}