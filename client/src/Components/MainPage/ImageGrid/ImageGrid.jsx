import React, { useState } from "react";

import Europe from "./images/Europe.jpg";
import Asia from "./images/Asia.jpg";
import America from "./images/America.jpg";
import Oceania from "./images/Oceania.jpg";
import Africa from "./images/Africa.jpg";
import {
  GridSubject,
  ImageContainerHover,
  ImageGridContainer,
  ImageItem,
  TextOverlay,
} from "./ImageGridSty";
import { Link } from "react-router-dom";

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

  return (
    <>
      <GridSubject>
        어디로 갈까?
        <br />
        <div style={{ fontSize: "20px", color: "gray" }}>
          팁에서 아이디어를 얻어보세요!
        </div>
      </GridSubject>
      <ImageGridContainer>
        <ImageContainerHover
          onMouseEnter={handleEuropeEnter}
          onMouseLeave={handleEuropeLeave}
        >
          <Link to="/info/europe">
            <ImageItem src={Europe} alt="Europe" />
            <TextOverlay showText={europehover}>Eruope</TextOverlay>
          </Link>
        </ImageContainerHover>
        <ImageContainerHover
          onMouseEnter={handleAsiaEnter}
          onMouseLeave={handleAsiaLeave}
        >
          <Link to="/info/asia">
            <ImageItem src={Asia} alt="Asia" />

            <TextOverlay showText={asiahover}>Asia</TextOverlay>
          </Link>
        </ImageContainerHover>
        <ImageContainerHover
          onMouseEnter={handleAmericaEnter}
          onMouseLeave={handleAmericaLeave}
        >
          <Link to="/info/america">
            <ImageItem src={America} alt="America" />

            <TextOverlay showText={americahover}>America</TextOverlay>
          </Link>
        </ImageContainerHover>
        <ImageContainerHover
          onMouseEnter={handleOceaniaEnter}
          onMouseLeave={handleOceaniaLeave}
        >
          <Link to="/info/oceania">
            <ImageItem src={Oceania} alt="Oceania" />

            <TextOverlay showText={oceaniahover}>Oceania</TextOverlay>
          </Link>
        </ImageContainerHover>
      </ImageGridContainer>
    </>
  );
};

export default ImageGrid;
