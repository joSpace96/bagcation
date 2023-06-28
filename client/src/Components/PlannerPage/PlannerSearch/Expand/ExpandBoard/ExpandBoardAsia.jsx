import React from "react";
import { ExpendContents } from "../ExpandAsiaSty";

const ExpandBoardAsia = ({ setSelectedDestination }) => {
  const handleDestinationSelection = (destination) => {
    setSelectedDestination(destination);
  };
  return (
    <ExpendContents>
      <span onClick={() => handleDestinationSelection("일본")}>일본</span>
      <span onClick={() => handleDestinationSelection("마카오")}>마카오</span>
      <span onClick={() => handleDestinationSelection("말레이시아")}>
        말레이시아
      </span>
      <span onClick={() => handleDestinationSelection("베트남")}>베트남</span>
      <span onClick={() => handleDestinationSelection("싱가포르")}>
        싱가포르
      </span>
      <span onClick={() => handleDestinationSelection("인도")}>인도</span>
      <span onClick={() => handleDestinationSelection("중국")}>중국</span>
      <span onClick={() => handleDestinationSelection("캄보디아")}>
        캄보디아
      </span>
      <span onClick={() => handleDestinationSelection("태국")}>태국</span>
      <span onClick={() => handleDestinationSelection("대만")}>대만</span>
      <span onClick={() => handleDestinationSelection("홍콩")}>홍콩</span>
      <span onClick={() => handleDestinationSelection("필리핀")}>필리핀</span>
      <span onClick={() => handleDestinationSelection("대한민국")}>
        대한민국
      </span>
      <span onClick={() => handleDestinationSelection("인도네시아")}>
        인도네시아
      </span>
      <span onClick={() => handleDestinationSelection("라오스")}>라오스</span>
      <span onClick={() => handleDestinationSelection("미얀마")}>미얀마</span>
      <span onClick={() => handleDestinationSelection("네팔")}>네팔</span>
      <span onClick={() => handleDestinationSelection("몰디브")}>몰디브</span>
      <span onClick={() => handleDestinationSelection("스리랑카")}>
        스리랑카
      </span>
    </ExpendContents>
  );
};

export default ExpandBoardAsia;
