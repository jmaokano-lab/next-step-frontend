"use client";
import { GalleryImageType } from "@/Types";
import { GalleryImage } from "../Card/GalleryImageCard";
import React, { useState } from "react";

export const ImageGallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages: GalleryImageType[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
      title: "Campus Life",
      category: "University Experience",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
      title: "Study Groups",
      category: "Collaborative Learning",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      title: "Modern Classrooms",
      category: "Learning Environment",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      title: "Student Success",
      category: "Academic Excellence",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
      title: "Global Community",
      category: "International Students",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
      title: "Cultural Events",
      category: "Campus Activities",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      title: "Innovation Hub",
      category: "Technology & Research",
    },
  ];

  return (
    <div className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="my-3 flex justify-center items-center mb-8">
          <span className="text-cyan-500 text-center mb-1  font-bold text-3xl mr-2 ">
            ■
          </span>
          <span className="text-cyan-500 text-center font-bold text-4xl md:text-4xl uppercase tracking-wider">
            GALLERY
          </span>
          <span className="text-cyan-500 text-center mb-1 font-bold text-3xl ml-2 ">
            ■
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px] mt-5">
          {/* Large Featured Image */}
          <div className="col-span-12 md:col-span-6 row-span-2">
            <GalleryImage
              image={galleryImages[0]}
              index={0}
              onClick={() => setSelectedImage(0)}
            />
          </div>

          {/* Small Images */}
          <div className="col-span-6 md:col-span-3 row-span-1">
            <GalleryImage
              image={galleryImages[1]}
              index={1}
              onClick={() => setSelectedImage(1)}
            />
          </div>

          <div className="col-span-6 md:col-span-3 row-span-1">
            <GalleryImage
              image={galleryImages[2]}
              index={2}
              onClick={() => setSelectedImage(2)}
            />
          </div>

          <div className="col-span-6 md:col-span-3 row-span-1">
            <GalleryImage
              image={galleryImages[3]}
              index={3}
              onClick={() => setSelectedImage(3)}
            />
          </div>

          <div className="col-span-6 md:col-span-3 row-span-1">
            <GalleryImage
              image={galleryImages[4]}
              index={4}
              onClick={() => setSelectedImage(4)}
            />
          </div>

          {/* <div className="col-span-12 md:col-span-4 row-span-1">
            <GalleryImage
              image={galleryImages[5]}
              index={5}
              onClick={() => setSelectedImage(5)}
            />
          </div>

          <div className="col-span-12 md:col-span-8 row-span-1">
            <GalleryImage
              image={galleryImages[6]}
              index={6}
              onClick={() => setSelectedImage(6)}
            />
          </div> */}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
            View Full Gallery
          </button>
        </div>
      </div>

      {/* Lightbox Modal (Simple version) */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {galleryImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
