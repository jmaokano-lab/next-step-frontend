import { ReactElement } from "react";

type FeatureCardProps = {
  icon: React.ElementType; // React component for the icon
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
};

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
  textColor,
}: FeatureCardProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div
        className={`w-12 h-12 ${bgColor} ${textColor} rounded-lg flex items-center justify-center flex-shrink-0`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};
