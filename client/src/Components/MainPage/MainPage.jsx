import React from "react";
import { MainPageContainer } from "./MainPageSty";
import ImageBanner from "./banner/ImageBanner";
import ImageGrid from "./ImageGrid/ImageGrid";
import Footer from "../FooterPage/Footer";
import BestPlan from "./BestPlan/BestPlan";
import ProfileNavBar from "./ProfileBar/ProfileNavBar";
import { useState } from "react";
import axios from "axios";
import apiServer from "../../api/api";
import { useEffect } from "react";

const MainPage = () => {
  const [planPost, setPlanPost] = useState([]);

  useEffect(() => {
    axios.get(`${apiServer}/plans/get_all_plan`).then((response) => {
      const data = response.data.All_post;
      setPlanPost(data);
    });
  }, []);
  return (
    <>
      <MainPageContainer>
        <ImageBanner />
        <ProfileNavBar planPost={planPost} />
        <ImageGrid />
        <BestPlan planPost={planPost} />
      </MainPageContainer>
      <Footer />
    </>
  );
};

export default MainPage;
