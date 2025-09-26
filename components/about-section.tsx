export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
          <div className="lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Mark – Your AI Partner for Small Business Success
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With years of experience in advertising and telecoms, I've seen firsthand how technology can transform businesses. Now, I'm here to help small business owners like you harness the power of AI to save time, cut costs, and grow your business.
            </p>
          </div>

          <div className="mt-16 lg:mt-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Why Choose Me?
            </h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-white font-bold">👥</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Tailored to You
                  </h4>
                  <p className="mt-2 text-gray-600">
                    I understand the unique challenges of small businesses and will show you how AI can solve your specific problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-white font-bold">🤝</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Hands-On Learning
                  </h4>
                  <p className="mt-2 text-gray-600">
                    My workshops and courses are designed to be interactive and easy to follow – no fluff, just results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-white font-bold">📍</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Local Expertise
                  </h4>
                  <p className="mt-2 text-gray-600">
                    I'm part of your community, and I'm here to help local businesses thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}