import React, { useEffect, useState } from "react";
import {
  EiffelTower,
  LouvreMuseum,
  Mont,
  ParisContent,
  ParisInfo,
} from "./EuropeSty";
import Eiffel from "./Paris/eiffel_tower.jpg";
import Louvre from "./Paris/louvre.jpg";
import Montmarte from "./Paris/montmartre.jpg";
import Colosseum from "./Rome/colosseum.jpg";
import trevi from "./Rome/trevi.jpg";
import Vatican from "./Rome/tiber-river.jpg";
import Castle from "./Prague/praha-castle.jpg";
import Bridge from "./Prague/praha-bridge.jpg";
import Square from "./Prague/praha-square.jpg";
import Gaudi from "./Barcelona/barcelona-gaudi.jpg";
import Street from "./Barcelona/barcelona-street.jpg";
import Beach from "./Barcelona/barcelona-beach.jpg";

const Europe = () => {
  const [showEiffelTower, setShowEiffelTower] = useState(false);
  useEffect(() => {
    setShowEiffelTower(true);
  }, []);
  return (
    <ParisInfo className="animate">
      <EiffelTower src={Eiffel} show={showEiffelTower} />
      <ParisContent>
        Paris
        <br />
        파리는 사랑의 도시로 유명합니다.
        <br /> 에펠탑, 루브르 박물관, 몽마르트 언덕 등을 방문해보세요.
      </ParisContent>
      <LouvreMuseum src={Louvre} />
      <Mont src={Montmarte} />
    </ParisInfo>
  );
};

export default Europe;
