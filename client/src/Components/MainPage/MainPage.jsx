import React from "react";
import { MainPageContainer } from "./MainPageSty";
import ImageBanner from "./banner/ImageBanner";
import ImageGrid from "./ImageGrid/ImageGrid";
import Footer from "../FooterPage/Footer";
import BestPlan from "./BestPlan/BestPlan";
import ProfileNavBar from "./ProfileBar/ProfileNavBar";

const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <ImageBanner />
        <ProfileNavBar />
        <ImageGrid />
        <BestPlan />
      </MainPageContainer>
      <Footer />
    </>
  );
};

export default MainPage;
