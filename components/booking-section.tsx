import BookButton from "./BookButton";

export default function BookingSection() {
  return (
    <section id="booking" className="bg-blue-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Take our 5-minute quiz to get personalized recommendations and book your free 30-minute consultation
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookButton variant="white" />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors">
              Take 5-Minute Quiz
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 text-center">
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white">5min</div>
              <div className="text-sm">Quick assessment</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white">24hr</div>
              <div className="text-sm">Response guarantee</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm">30-minute consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}