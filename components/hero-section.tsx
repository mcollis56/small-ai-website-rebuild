export default function HeroSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">AI Made Simple</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            AI Made Simple for Small Businesses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Save time, save money, and stay ahead of the competition. We provide practical, easy-to-understand AI tools that deliver real results for your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <span role="img" aria-label="clock">⏰</span>
                </div>
                Save Time
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Automate repetitive tasks and free up your team to focus on what matters most.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <span role="img" aria-label="money">💰</span>
                </div>
                Save Money
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Reduce operational costs and increase efficiency with intelligent automation.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <span role="img" aria-label="rocket">🚀</span>
                </div>
                Stay Ahead
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Leverage cutting-edge AI to gain a competitive advantage in your market.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
