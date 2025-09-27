const resources = [
  {
    title: "Free Guide",
    name: '"Demystifying AI"',
    description: "Get to know the basics and how it can help your business.",
    cta: "Download Now",
    subtitle: "to transform your business operations."
  },
  {
    title: "Free Sheet",
    name: '"How to Set Up a Basic AI Chatbot in 10 Minutes"',
    description: "Quick, easy steps for beginners.",
    cta: "Get your first",
    subtitle: "AI tool running today!"
  },
  {
    title: "Free Quiz",
    name: '"Are You Ready for AI?"',
    description: "Discover which AI solutions match your business needs.",
    cta: "Take the quiz",
    subtitle: "to find your perfect starting point."
  }
];

export default function FreeResources() {
  return (
    <section id="resources" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Free Resources to Get You Started with AI
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Not ready to book a workshop or consultation? No problem! Start your AI journey with these helpful resources.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {resource.title}
              </h3>

              <h4 className="text-base font-medium text-gray-900 mb-4">
                {resource.name}
              </h4>

              <p className="text-gray-600 mb-6">
                {resource.description}
              </p>

              <div className="space-y-2">
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:text-blue-800 underline"
                >
                  {resource.cta}
                </a>
                <span className="text-gray-600"> {resource.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}