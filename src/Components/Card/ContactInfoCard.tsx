export const ContactInfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  details: string[];
}> = ({ icon, title, details }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};
