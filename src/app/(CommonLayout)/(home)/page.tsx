import { FeatureCard } from "@/Components/Card/FeatureCard";
import { BuildCareerSection } from "@/Components/Home/BuildYourCarrear";
import { CountrySection } from "@/Components/Home/CountrySection";
import { HeroSection } from "@/Components/Home/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#f3f7f8]">
      <HeroSection></HeroSection>
      <CountrySection></CountrySection>
      <BuildCareerSection></BuildCareerSection>
    </div>
  );
};

export default Home;
