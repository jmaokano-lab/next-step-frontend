export const AboutUsSection = () => {
  const features = [
    {
      title: "Successfully Trained",
      description: "Business tailored it design, management support services.",
      color: "bg-pink-500",
      icon: "✓",
    },
    {
      title: "Education Growth",
      description: "Business tailored it design, management support services.",
      color: "bg-cyan-500",
      icon: "✓",
    },
    {
      title: "Students Trained",
      description: "Business tailored it design, management support services.",
      color: "bg-orange-500",
      icon: "✓",
    },
    // {
    //   title: "Successfully Trained",
    //   description: "Business tailored it design, management support services.",
    //   color: "bg-purple-500",
    //   icon: "✓",
    // },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-8 w-20 h-20 grid grid-cols-4 gap-1.5 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              ))}
            </div>

            {/* Main circular image */}
            <div className="relative">
              {/* Small circular image top left */}
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop"
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative colored circles */}
              <div className="absolute top-20 -left-8 w-16 h-16 bg-blue-500 rounded-full opacity-80"></div>
              <div className="absolute top-32 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-80"></div>

              {/* Main large circular image */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=800&fit=crop"
                  alt="Student reading"
                  className="relative w-full h-full object-cover rounded-full"
                />

                {/* Experience badge */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-6 py-2 rounded-full shadow-2xl">
                  <div className="text-center">
                    <span className="text-4xl font-bold">02+</span>
                    <p className="text-sm font-semibold uppercase tracking-wide mt-1">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-6">
              <span className="text-cyan-500 font-bold text-sm uppercase tracking-wider">
                ■ OUR ABOUT US
              </span>
            </div>

            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Complete About Students University .
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Business tailored it design, management & support services
              business agency elit, sed do eiusmod tempor.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
