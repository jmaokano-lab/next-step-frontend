"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React, { useState } from "react";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Hey! Build Your Career",
      subtitle: "With Follow Histudy",
      tagline: "BASED ON THE BEST HISTUDY",
      backgroundImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=800&fit=crop",
    },
    {
      title: "Study Abroad Programs",
      subtitle: "Your Future Starts Here",
      tagline: "WORLD-CLASS EDUCATION AWAITS",
      backgroundImage:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=800&fit=crop",
    },
    {
      title: "Expert Consulting Services",
      subtitle: "Navigate Your Journey",
      tagline: "TRUSTED BY THOUSANDS OF STUDENTS",
      backgroundImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=800&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden h-[390px]">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full relative bg-cover bg-center py-10"
            style={{
              backgroundImage: ` url('${slide.backgroundImage}')`,
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-white text-sm uppercase tracking-wider mb-6">
                {/* {slide.tagline} */}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                {slide.title}
                <br />
                {slide.subtitle}
              </h1>
              <button className="bg-gradient-to-r from-[#16517E] to-[#1D8AB1] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all">
                More About University
              </button>

              {/* Social Icons */}
              {/* <div className="flex items-center justify-center space-x-6 mt-12">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all cursor-pointer hover:bg-[#61c3e3]"
                  >
                    <Icon className="w-5 h-5 text-[#1D8AB1] hover:text-white" />
                  </button>
                ))}
              </div> */}

              <p className="text-white text-sm mt-4">
                (512)+ Histudy Students. (68)+ Histudy Instructor. Since 2014
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all backdrop-blur-sm "
      >
        <svg
          className="w-6 h-6 text-[#1D8AB1] cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
      >
        <svg
          className="w-6 h-6 text-[#1D8AB1] cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-[#188CB1] w-8"
                : "bg-[#0e556d] bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
