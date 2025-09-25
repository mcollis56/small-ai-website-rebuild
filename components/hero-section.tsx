⏺ export default function HeroSection() {
    return (
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 
  sm:text-6xl">
              AI Made Simple for{" "}
              <span className="text-blue-600">Small Businesses</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Save time, save money, and stay ahead without the headache. No
   tech jargon — just solutions that work for your business.
            </p>

            {/* Value Propositions */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-lg 
  flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold 
  text-lg">⏰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Save
  Time</h3>
                <p className="mt-2 text-gray-600">Automate repetitive
  tasks</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 bg-green-100 rounded-lg 
  flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold 
  text-lg">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Save
  Money</h3>
                <p className="mt-2 text-gray-600">Cut operational costs</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 bg-purple-100 rounded-lg 
  flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold 
  text-lg">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Stay
  Ahead</h3>
                <p className="mt-2 text-gray-600">Keep competitive edge</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

──────