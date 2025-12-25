import CategoryCard from "../Card/CategoryCard";

export const CountrySection = () => {
  const categories = [
    { name: "USA", icon: "/flag/usa.jpg", color: "bg-yellow-100" },
    { name: "Australia", icon: "/flag/australia.jpg", color: "bg-blue-100" },
    { name: "Austria", icon: "/flag/austria.jpg", color: "bg-purple-100" },
    { name: "Denmark", icon: "/flag/Denmark.jpg", color: "bg-orange-100" },
    { name: "Finland", icon: "/flag/finland.png", color: "bg-yellow-100" },
    { name: "Hungary", icon: "/flag/hungary.jpg", color: "bg-pink-100" },
    // { name: "Malaysia", icon: "/flag/malaysia.jpg", color: "bg-pink-100" },
  ];

  return (
    <div
      className="bg-gray-50 py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/pattern-1.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              name={category.name}
              bgColor={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
