import React from "react";
import {
  BannerContainer,
  BannerImage,
  BannerLogo,
  BannerOverlay,
  BannerSearch,
  SearchButton,
} from "./ImageBannerSty";
import Img from "./images/hero-slider-5.jpg";
import Logo from "./images/Logo.png";

const ImageBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={Img} alt="Banner" />
      <BannerOverlay>
        <BannerLogo src={Logo}></BannerLogo>
        <BannerSearch>
          <input type="text" placeholder="국가명 , 도시명으로 검색"></input>
          <button className="material-symbols-outlined">search </button>
        </BannerSearch>
      </BannerOverlay>
    </BannerContainer>
  );
};

export default ImageBanner;
