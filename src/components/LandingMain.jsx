import React from "react";
import Hero from "../Pages/Hero";
import ImageSlider from "../Pages/ImageSlider";
import IconsSlider from "../Pages/IconsSlider";
import Trending from "../Pages/Trending";
import Banner from "./Banner";
import Imagediv from "../Pages/Imagediv";

const LandingMain = () => {
  return (
    <div>
      <Hero />
      <ImageSlider />
      <IconsSlider />
      <Trending />
      <Banner />
      <ImageSlider />
      <Trending />
      <Imagediv />
    </div>
  );
};

export default LandingMain;
