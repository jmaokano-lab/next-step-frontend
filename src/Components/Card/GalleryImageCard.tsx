"use client";
import { GalleryImageType } from "@/Types";
import { useEffect, useState } from "react";

export const GalleryImage: React.FC<{
  image: GalleryImageType;
  index: number;
  onClick: () => void;
}> = ({ image, index, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Auto flip for some images (index 1, 3, 5)
    if ([1, 3, 5].includes(index)) {
      const interval = setInterval(() => {
        setIsFlipped((prev) => !prev);
      }, 4000 + index * 500); // Different timing for each image
      return () => clearInterval(interval);
    }
  }, [index]);

  return (
    <div
      className="relative group cursor-pointer h-full"
      onClick={onClick}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-bold text-lg mb-1">{image.title}</h4>
              <p className="text-sm text-gray-200">{image.category}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-white text-center">
            <h4 className="font-bold text-xl mb-2">{image.title}</h4>
            <p className="text-sm opacity-90">{image.category}</p>
            <div className="mt-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
