const useCases = [
  {
    title: "Barber Shop",
    description: "Appointment booking, reminders, customer insights",
    image: "💈",
  },
  {
    title: "Florist Business",
    description: "Content generation, inventory management, personalization",
    image: "🌸",
  },
  {
    title: "Plumber Services",
    description: "Emergency scheduling, quote generation, service tracking",
    image: "🔧",
  },
];

export default function UseCaseGallery() {
  return (
    <section id="use-cases" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Industry-Specific AI Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tailored AI solutions for your specific business type
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="text-center">
              <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">{useCase.image}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}