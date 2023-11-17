import React from "react";

import MainLayout from "@components/layouts/MainLayout";

import FavouriteApps from "~/home/components/FavouriteApps";
import GetStarted from "~/home/components/GetStarted";
import HomeHeroSection from "~/home/components/Hero";

import Features from "./components/Features";

const HomePage = () => {
  return (
    <MainLayout>
      <HomeHeroSection />
      <Features />
      <FavouriteApps />
      <GetStarted />
    </MainLayout>
  );
};

export default HomePage;
