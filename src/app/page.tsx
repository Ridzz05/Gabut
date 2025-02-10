import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-24 h-24 relative mb-8">
            <Image
              src="/icons/logo.svg"
              alt="K.A Tech Logo"
              fill
              priority
              className="animate-pulse"
            />
          </div>
          <h1 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
            Welcome to <span className="text-[#442781]">K.A Tech</span>
          </h1>
          <p className="font-rubik text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Discover innovative solutions and cutting-edge technology. We transform ideas into powerful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/about"
              className="px-8 py-3 bg-[#442781] text-white rounded-lg font-rubik hover:bg-[#61459C] transition-colors"
            >
              Get Started
            </a>
            <a
              href="/blog"
              className="px-8 py-3 border-2 border-[#442781] text-[#442781] rounded-lg font-rubik hover:bg-[#442781] hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "Fast Performance",
              description: "Lightning-fast solutions optimized for speed and efficiency"
            },
            {
              icon: "🛠️",
              title: "Powerful Tools",
              description: "Advanced tools and utilities to boost your productivity"
            },
            {
              icon: "🎯",
              title: "Precision Focus",
              description: "Accurate and reliable results for your specific needs"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-raleway font-semibold text-xl text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="font-rubik text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
