import React from "react";
import { MainPageContainer } from "./MainPageSty";
import ImageBanner from "./banner/ImageBanner";
import ImageGrid from "./ImageGrid/ImageGrid";
import Footer from "../FooterPage/Footer";

const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <ImageBanner />
        <ImageGrid />
      </MainPageContainer>
      <Footer />
    </>
  );
};

export default MainPage;
