import { BookOpen, Heart, Play, Users } from "lucide-react";
import { FeatureCard } from "../Card/FeatureCard";

export const BuildCareerSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Flexible Classes",
      description: "Learn at your own pace with flexible scheduling options",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      textColor: "text-pink-800",
    },
    {
      icon: BookOpen,
      title: "Learn From Anywhere",
      description: "Access courses from anywhere in the world",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      textColor: "text-blue-800",
    },
    {
      icon: Users,
      title: "Experienced Teacher's service.",
      description: "Learn from industry experts and experienced educators",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      textColor: "text-orange-800",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Video Section */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/GfTJXLIOcDU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <Play
                  className="w-8 h-8 text-blue-600 ml-1"
                  fill="currentColor"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Build your Career Life.
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
                textColor={feature.textColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
