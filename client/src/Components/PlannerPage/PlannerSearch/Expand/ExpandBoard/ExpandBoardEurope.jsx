import React from "react";
import { ExpendContents } from "../ExpandAsiaSty";

const ExpandBoardEurope = ({ setSelectedDestination }) => {
  const handleDestinationSelection = (destination) => {
    setSelectedDestination(destination);
  };
  return (
    <ExpendContents>
      <span onClick={() => handleDestinationSelection("오스트리아")}>
        오스트리아
      </span>
      <span onClick={() => handleDestinationSelection("이탈리아")}>
        이탈리아
      </span>
      <span onClick={() => handleDestinationSelection("체코")}>체코</span>
      <span onClick={() => handleDestinationSelection("크로아티아")}>
        크로아티아
      </span>
      <span onClick={() => handleDestinationSelection("터키")}>터키</span>
      <span onClick={() => handleDestinationSelection("폴란드")}>폴란드</span>
      <span onClick={() => handleDestinationSelection("헝가리")}>헝가리</span>
      <span onClick={() => handleDestinationSelection("프랑스")}>프랑스</span>
      <span onClick={() => handleDestinationSelection("영국")}>영국</span>
      <span onClick={() => handleDestinationSelection("스페인")}>스페인</span>
      <span onClick={() => handleDestinationSelection("독일")}>독일</span>
      <span onClick={() => handleDestinationSelection("스위스")}>스위스</span>
      <span onClick={() => handleDestinationSelection("네덜란드")}>
        네덜란드
      </span>
      <span onClick={() => handleDestinationSelection("벨기에")}>벨기에</span>
      <span onClick={() => handleDestinationSelection("모나코")}>모나코</span>
      <span onClick={() => handleDestinationSelection("포르투갈")}>
        포르투갈
      </span>
      <span onClick={() => handleDestinationSelection("아일랜드")}>
        아일랜드
      </span>
      <span onClick={() => handleDestinationSelection("아이슬란드")}>
        아이슬란드
      </span>
      <span onClick={() => handleDestinationSelection("스웨덴")}>스웨덴</span>
      <span onClick={() => handleDestinationSelection("그리스")}>그리스</span>
      <span onClick={() => handleDestinationSelection("덴마크")}>덴마크</span>
      <span onClick={() => handleDestinationSelection("핀란드")}>핀란드</span>
      <span onClick={() => handleDestinationSelection("러시아")}>러시아</span>
      <span onClick={() => handleDestinationSelection("노르웨이")}>
        노르웨이
      </span>
      <span onClick={() => handleDestinationSelection("슬로베니아")}>
        슬로베니아
      </span>
      <span onClick={() => handleDestinationSelection("보스니아")}>
        보스니아
      </span>
      <span onClick={() => handleDestinationSelection("루마니아")}>
        루마니아
      </span>
      <span onClick={() => handleDestinationSelection("불가리아")}>
        불가리아
      </span>
      <span onClick={() => handleDestinationSelection("룩셈부르크")}>
        룩셈부르크
      </span>
    </ExpendContents>
  );
};

export default ExpandBoardEurope;
