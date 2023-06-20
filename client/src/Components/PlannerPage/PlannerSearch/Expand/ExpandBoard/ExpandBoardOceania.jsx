import React from "react";
import { ExpendContents2 } from "../ExpandAsiaSty";

const ExpandBoardOceania = ({ setSelectedDestination }) => {
  const handleDestinationSelection = (destination) => {
    setSelectedDestination(destination);
  };
  return (
    <ExpendContents2>
      <span onClick={() => handleDestinationSelection("오스트레일리아")}>
        오스트레일리아
      </span>
      <span onClick={() => handleDestinationSelection("괌")}>괌</span>
      <span onClick={() => handleDestinationSelection("사이판")}>사이판</span>
      <span onClick={() => handleDestinationSelection("뉴질랜드")}>
        뉴질랜드
      </span>
      <span onClick={() => handleDestinationSelection("뉴칼레도니아")}>
        뉴칼레도니아
      </span>
      <span onClick={() => handleDestinationSelection("피지")}>피지</span>
      <span onClick={() => handleDestinationSelection("프렌치폴리네시아")}>
        프렌치폴리네시아
      </span>
    </ExpendContents2>
  );
};

export default ExpandBoardOceania;
