import CalcomButton from '@/components/CalcomButton';

export default function BookingSection() {
  return (
    <section id="contact" className="bg-blue-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Talk About How AI Can Transform Your Business
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Got questions? Ready to book a workshop or consultation? Fill out the form here, and I'll get back to you within 24 hrs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <span className="text-blue-200 font-bold">•</span>
                <p className="text-blue-100">
                  <span className="font-semibold text-white">5-minute quiz</span> reveals which AI tools match your specific business needs
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-200 font-bold">•</span>
                <p className="text-blue-100">
                  <span className="font-semibold text-white">Personalized report</span> with actionable recommendations tailored to your industry
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-200 font-bold">•</span>
                <p className="text-blue-100">
                  <span className="font-semibold text-white">No technical knowledge</span> required - just answer simple questions about your business
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-200 font-bold">•</span>
                <p className="text-blue-100">
                  <span className="font-semibold text-white">Immediate results</span> delivered to your inbox with suggested next steps
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-blue-100 mb-6">
                Take the <span className="font-semibold text-white">"Are You Ready for AI?"</span> quiz today and start your AI journey with confidence
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block text-center">
                  <CalcomButton buttonText="Book Free Consultation" />
                </div>
                <a
                  href="https://your-quiz-link-here.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors inline-block text-center"
                >
                  Take 5-Minute Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}