import React from "react";
import { ExpendContents } from "../ExpandAsiaSty";

const ExpandBoardAmerica = ({ setSelectedDestination }) => {
  const handleDestinationSelection = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <ExpendContents>
      <span onClick={() => handleDestinationSelection("미국")}>미국</span>
      <span onClick={() => handleDestinationSelection("캐나다")}>캐나다</span>
      <span onClick={() => handleDestinationSelection("멕시코")}>멕시코</span>
      <span onClick={() => handleDestinationSelection("쿠바")}>쿠바</span>
      <span onClick={() => handleDestinationSelection("바하마")}>바하마</span>
      <span onClick={() => handleDestinationSelection("자메이카")}>
        자메이카
      </span>
      <span onClick={() => handleDestinationSelection("미국")}>페루</span>
      <span onClick={() => handleDestinationSelection("아르헨티나")}>
        아르헨티나
      </span>
      <span onClick={() => handleDestinationSelection("브라질")}>브라질</span>
      <span onClick={() => handleDestinationSelection("칠레")}>칠레</span>
      <span onClick={() => handleDestinationSelection("볼리비아")}>
        볼리비아
      </span>
      <span onClick={() => handleDestinationSelection("콜롬비아")}>
        콜롬비아
      </span>
      <span onClick={() => handleDestinationSelection("에콰도르")}>
        에콰도르
      </span>
    </ExpendContents>
  );
};

export default ExpandBoardAmerica;
