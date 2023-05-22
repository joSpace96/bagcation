import React, { useState } from "react";

import Europe from "./images/Europe.jpg";
import Asia from "./images/Asia.jpg";
import America from "./images/America.jpg";
import Oceania from "./images/Oceania.jpg";
import Africa from "./images/Africa.jpg";
import {
  ImageContainerHover,
  ImageGridContainer,
  ImageItem,
  TextOverlay,
} from "./ImageGridSty";

const ImageGrid = () => {
  const [europehover, setEuropeHover] = useState(false);
  const [asiahover, setAsiaHover] = useState(false);
  const [americahover, setAmericaHover] = useState(false);
  const [oceaniahover, setOceaniaHover] = useState(false);
  const [africahover, setAfricaHover] = useState(false);

  const handleEuropeEnter = () => {
    setEuropeHover(true);
  };
  const handleEuropeLeave = () => {
    setEuropeHover(false);
  };
  const handleAsiaEnter = () => {
    setAsiaHover(true);
  };
  const handleAsiaLeave = () => {
    setAsiaHover(false);
  };
  const handleAmericaEnter = () => {
    setAmericaHover(true);
  };
  const handleAmericaLeave = () => {
    setAmericaHover(false);
  };
  const handleOceaniaEnter = () => {
    setOceaniaHover(true);
  };
  const handleOceaniaLeave = () => {
    setOceaniaHover(false);
  };
  const handleAfricaEnter = () => {
    setAfricaHover(true);
  };
  const handleAfricaLeave = () => {
    setAfricaHover(false);
  };
  return (
    <ImageGridContainer>
      <ImageContainerHover
        onMouseEnter={handleEuropeEnter}
        onMouseLeave={handleEuropeLeave}
      >
        <ImageItem src={Europe} alt="Europe" />
        <TextOverlay showText={europehover}>Europe</TextOverlay>
      </ImageContainerHover>
      <ImageContainerHover
        onMouseEnter={handleAsiaEnter}
        onMouseLeave={handleAsiaLeave}
      >
        <ImageItem src={Asia} alt="Asia" />
        <TextOverlay showText={asiahover}>Asia</TextOverlay>
      </ImageContainerHover>
      <ImageContainerHover
        onMouseEnter={handleAmericaEnter}
        onMouseLeave={handleAmericaLeave}
      >
        <ImageItem src={America} alt="America" />
        <TextOverlay showText={americahover}>America</TextOverlay>
      </ImageContainerHover>
      <ImageContainerHover
        onMouseEnter={handleOceaniaEnter}
        onMouseLeave={handleOceaniaLeave}
      >
        <ImageItem src={Oceania} alt="Oceania" />
        <TextOverlay showText={oceaniahover}>Oceania</TextOverlay>
      </ImageContainerHover>
      <ImageContainerHover
        onMouseEnter={handleAfricaEnter}
        onMouseLeave={handleAfricaLeave}
      >
        <ImageItem src={Africa} alt="Oceania" />
        <TextOverlay showText={africahover}>Africa</TextOverlay>
      </ImageContainerHover>
    </ImageGridContainer>
  );
};

export default ImageGrid;
