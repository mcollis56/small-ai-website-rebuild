export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Small AI</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Making AI accessible for small businesses
              </p>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="/about" className="text-sm leading-6 text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm leading-6 text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/ai-solution-finder" className="text-sm leading-6 text-gray-400 hover:text-white">
                  AI Solution Finder
                </a>
              </li>
              <li>
                <a href="/resources" className="text-sm leading-6 text-gray-400 hover:text-white">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="/privacy" className="text-sm leading-6 text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Small AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
