import { FeatureCard } from "@/Components/Card/FeatureCard";
import { AboutUsSection } from "@/Components/Home/AboutUs";
import { BuildCareerSection } from "@/Components/Home/BuildYourCarrear";
import { CountrySection } from "@/Components/Home/CountrySection";
import { EventsSection } from "@/Components/Home/EventSection";
import { ImageGallerySection } from "@/Components/Home/GallerySection";
import { HeroSection } from "@/Components/Home/HeroSection";
import { OnlineCoursesSection } from "@/Components/Home/OnlineCourses";
import { ResearchSection } from "@/Components/Home/ResearchSection";
import Testimonial from "@/Components/Home/Testimonial";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#f3f7f8]">
      <HeroSection></HeroSection>
      <CountrySection></CountrySection>
      <BuildCareerSection></BuildCareerSection>
      <AboutUsSection></AboutUsSection>
      <OnlineCoursesSection></OnlineCoursesSection>
      <ResearchSection></ResearchSection>
      <EventsSection></EventsSection>
      <ImageGallerySection></ImageGallerySection>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
