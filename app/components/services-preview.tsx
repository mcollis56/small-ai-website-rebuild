import CalcomButton from '@/app/components/CalcomButton';

const services = [
  {
    name: "Basic AI Setup",
    price: "$99",
    features: [
      "AI readiness assessment",
      "Tool recommendations",
      "Basic implementation guide",
      "30-minute consultation"
    ]
  },
  {
    name: "Purpose-Built AI Agent",
    price: "$299",
    features: [
      "Fully functional AI agent",
      "Workflow integration",
      "Clear instructions",
      "30 days support"
    ],
    popular: true
  },
  {
    name: "Complete AI Transformation",
    price: "$499",
    features: [
      "Complete business AI audit",
      "Multiple AI agent implementation",
      "Team training",
      "90-day support"
    ]
  }
];

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, transparent pricing for businesses ready to embrace AI
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-4xl lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`rounded-2xl p-8 ${
                service.popular
                  ? 'bg-blue-600 text-white ring-2 ring-blue-600'
                  : 'bg-white text-gray-900 ring-1 ring-gray-200'
              }`}
            >
              {service.popular && (
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-lg font-semibold ${service.popular ? 'text-white' : 'text-gray-900'}`}>
                {service.name}
              </h3>
              <p className={`mt-6 flex items-baseline gap-x-1 ${service.popular ? 'text-white' : 'text-gray-900'}`}>
                <span className="text-4xl font-bold tracking-tight">{service.price}</span>
                <span className={`text-sm font-semibold leading-6 ${service.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                  one-time
                </span>
              </p>

              <ul className={`mt-8 space-y-3 text-sm leading-6 ${service.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <span className={`text-sm ${service.popular ? 'text-blue-200' : 'text-blue-600'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {service.popular ? (
                  <CalcomButton
                    buttonText="Get Started"
                    buttonClass="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-indigo-50"
                  />
                ) : (
                  <CalcomButton buttonText="Get Started" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}