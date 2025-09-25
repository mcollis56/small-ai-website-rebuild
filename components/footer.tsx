export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white">small-ai</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Making AI simple and accessible for small business owners
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white">
                      AI Services
                    </a>
                  </li>
                  <li>
                    <a href="#resources" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Free Resources
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-sm leading-6 text-gray-300 hover:text-white">
                      About Mark
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="mailto:info@small-ai.com" className="text-sm leading-6 text-gray-300 hover:text-white">
                      info@small-ai.com
                    </a>
                  </li>
                  <li className="text-sm leading-6 text-gray-300">
                    Northern Beaches, NSW
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2025 small-ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}