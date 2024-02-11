import AboutSection from "@/components/pages/AboutSection";
import CTASection from "@/components/pages/CTASection";
import HeroSection from "@/components/pages/HeroSection";
import ServicesSection from "@/components/pages/ServicesSection";
import WorkSection from "@/components/pages/WorkSection";
import React from "react";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection hidden />
      <ServicesSection />
      <WorkSection />
      <CTASection />
    </main>
  );
};

export default LandingPage;
