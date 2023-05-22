import React from "react";
import {
  BannerContainer,
  BannerImage,
  BannerLogo,
  BannerOverlay,
} from "./ImageBannerSty";
import Img from "./images/hero-slider-5.jpg";
import Logo from "./images/Logo.png";

const ImageBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={Img} alt="Banner" />
      <BannerOverlay>
        <BannerLogo src={Logo}></BannerLogo>
      </BannerOverlay>
    </BannerContainer>
  );
};

export default ImageBanner;
