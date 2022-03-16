import React from "react";

import Footer from "../common/Footer";
import Header from "../common/Header";

import AppRating from "../components/AppRating";
import BrandsLove from "../components/BrandsLove";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header />
        <HeroSection />
        <ProductShowcase />
        <FeelSpecial />
        <BrandsLove />
        <CredExperience />
        <MobileScroll />
        <div className="hide-for-mobile">
          <WindowPeak />
        </div>
        <CredSecurity />
        <CredStory />
        <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
