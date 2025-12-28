import Image from "next/image";

type Category = {
  icon: string;
  name: string;
  bgColor: string;
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ icon, name, bgColor }: Category) => {
  return (
    <div className="text-center hover:opacity-80 transition-opacity cursor-pointer">
      <div className="w-36 h-36 mx-auto mb-4 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#57a2d7] to-[#02485f] p-1">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img src={icon} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <h3 className="font-bold text-gray-900 text-base">{name}</h3>
    </div>
  );
};

export default CategoryCard;
