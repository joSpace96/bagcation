import React from "react";
import {
  BestPlanContainer,
  Header,
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
  Title,
} from "./BestPlanSty";
import { Link } from "react-router-dom";
import Null from "./PostMainImages/null.png";
import { useEffect } from "react";
import axios from "axios";
import apiServer from "../../../api/api";
import { useState } from "react";

// 아시아 이미지
import Japan from "./PostMainImages/asia/Japan.jpg";
import Korea from "./PostMainImages/asia/Korea.jpg";
import China from "./PostMainImages/asia/China.jpg";
import India from "./PostMainImages/asia/India.jpg";
import Taiwan from "./PostMainImages/asia/Taiwan.jpg";
import Phillipine from "./PostMainImages/asia/Philippines.jpg";
import Vietnam from "./PostMainImages/asia/Vietnam.jpg";
import Cambodia from "./PostMainImages/asia/Cambodia.jpg";
import Thailand from "./PostMainImages/asia/Thailand.jpg";
import Laos from "./PostMainImages/asia/Loas.jpg";
import Malaysia from "./PostMainImages/asia/Malaysia.jpg";
import Indonesia from "./PostMainImages/asia/Indonesia.jpg";
import Nepal from "./PostMainImages/asia/Nepal.jpg";
import UAE from "./PostMainImages/asia/UAE.jpg";
import Myanmar from "./PostMainImages/asia/Myanmar.jpg";

// 유럽 이미지
import Poland from "./PostMainImages/europe/Poland.jpg";
import Iceland from "./PostMainImages/europe/Iceland.jpg";
import England from "./PostMainImages/europe/England.jpg";
import Ireland from "./PostMainImages/europe/Ireland.jpg";
import Asutria from "./PostMainImages/europe/Austria.jpg";
import Belgium from "./PostMainImages/europe/Belgium.jpg";
import Bosnia from "./PostMainImages/europe/Bosnia.jpg";
import Bulgaria from "./PostMainImages/europe/Bulgaria.jpg";
import Croatia from "./PostMainImages/europe/Croatia.jpg";
import Czech from "./PostMainImages/europe/Czech.jpg";
import Denmark from "./PostMainImages/europe/Denmark.jpg";
import Finland from "./PostMainImages/europe/Finland.jpg";
import France from "./PostMainImages/europe/France.jpg";
import Germany from "./PostMainImages/europe/Germany.jpg";
import Greece from "./PostMainImages/europe/Greece.jpg";
import Hungary from "./PostMainImages/europe/Hungary.jpg";
import Italy from "./PostMainImages/europe/Italy.jpg";
import Netherlands from "./PostMainImages/europe/Netherlands.jpg";
import Norway from "./PostMainImages/europe/Norway.jpg";
import Romania from "./PostMainImages/europe/Romania.jpg";
import Russia from "./PostMainImages/europe/Russia.jpg";
import Spain from "./PostMainImages/europe/Russia.jpg";
import Slovenian from "./PostMainImages/europe/Slovenian.jpg";
import Sweden from "./PostMainImages/europe/Sweden.jpg";
import Swiss from "./PostMainImages/europe/Swiss.jpg";
import Turkey from "./PostMainImages/europe/Trukey.jpg";
import Portugal from "./PostMainImages/europe/Portugal.jpg";

// 아메리카 이미지
import Argentina from "./PostMainImages/america/Argentina.jpg";
import Bahamas from "./PostMainImages/america/Bahamas.jpg";
import Bolivia from "./PostMainImages/america/Bolivia.jpg";
import Brazil from "./PostMainImages/america/Brazil.jpg";
import Canada from "./PostMainImages/america/Canada.jpg";
import Chile from "./PostMainImages/america/Chile.jpg";
import Colombia from "./PostMainImages/america/Colombia.jpg";
import Cuba from "./PostMainImages/america/Cuba.jpg";
import Ecuador from "./PostMainImages/america/Ecuador.jpg";
import Jmaica from "./PostMainImages/america/Jamaica.jpg";
import Mexico from "./PostMainImages/america/Mexico.jpg";
import Peru from "./PostMainImages/america/Peru.jpg";
import USA from "./PostMainImages/america/USA.jpg";

// 남태평양 이미지
import Austrailia from "./PostMainImages/oceania/Austrailia.jpg";
import Fiji from "./PostMainImages/oceania/Fiji.jpg";
import Guam from "./PostMainImages/oceania/Guam.jpg";
import New_Caledonia from "./PostMainImages/oceania/New_caledonia.jpg";
import Newzealand from "./PostMainImages/oceania/Newzealand.jpg";
import Polynesia from "./PostMainImages/oceania/Polynesia.jpg";
import saipan from "./PostMainImages/oceania/Saipan.jpg";

const BestPlan = () => {
  const [planPost, setPlanPost] = useState([]);

  useEffect(() => {
    axios.get(`${apiServer}/plans/get_all_plan`).then((response) => {
      const data = response.data.All_post;
      setPlanPost(data);
    });
  }, []);
  console.log("불러온 데이터", planPost);
  return (
    <BestPlanContainer>
      <Header>
        <Title>
          인기 여행일정
          <br />
          <div>다른 여행자들의 일정을 참고해 나만의 여행을 계획해보세요!</div>
        </Title>
      </Header>
      <PostContainer>
        {planPost
          .sort((a, b) => b.likecount - a.likecount)
          .slice(0, 6)
          .map((data) => (
            <Post key={data.idx}>
              <Link to={`planner/post/${data.idx}`}>
                <PostImage
                  src={
                    // 아시아
                    data.travelNations[0].nation === "일본"
                      ? Japan
                      : data.travelNations[0].nation === "대한민국"
                      ? Korea
                      : data.travelNations[0].nation === "중국"
                      ? China
                      : data.travelNations[0].nation === "대만"
                      ? Taiwan
                      : data.travelNations[0].nation === "필리핀"
                      ? Phillipine
                      : data.travelNations[0].nation === "라오스"
                      ? Laos
                      : data.travelNations[0].nation === "베트남"
                      ? Vietnam
                      : data.travelNations[0].nation === "캄보디아"
                      ? Cambodia
                      : data.travelNations[0].nation === "태국"
                      ? Thailand
                      : data.travelNations[0].nation === "미얀마"
                      ? Myanmar
                      : data.travelNations[0].nation === "말레이시아"
                      ? Malaysia
                      : data.travelNations[0].nation === "인도네시아"
                      ? Indonesia
                      : data.travelNations[0].nation === "네팔"
                      ? Nepal
                      : data.travelNations[0].nation === "인도"
                      ? India
                      : data.travelNations[0].nation === "아랍에미리트"
                      ? UAE
                      : // 유럽
                      data.travelNations[0].nation === "독일"
                      ? Germany
                      : data.travelNations[0].nation === "덴마크"
                      ? Denmark
                      : data.travelNations[0].nation === "아이슬란드"
                      ? Iceland
                      : data.travelNations[0].nation === "아일랜드"
                      ? Ireland
                      : data.travelNations[0].nation === "영국"
                      ? England
                      : data.travelNations[0].nation === "포르투갈"
                      ? Portugal
                      : data.travelNations[0].nation === "스페인"
                      ? Spain
                      : data.travelNations[0].nation === "프랑스"
                      ? France
                      : data.travelNations[0].nation === "네덜란드"
                      ? Netherlands
                      : data.travelNations[0].nation === "벨기에"
                      ? Belgium
                      : data.travelNations[0].nation === "스위스"
                      ? Swiss
                      : data.travelNations[0].nation === "이탈리아"
                      ? Italy
                      : data.travelNations[0].nation === "노르웨이"
                      ? Norway
                      : data.travelNations[0].nation === "스웨덴"
                      ? Sweden
                      : data.travelNations[0].nation === "폴란드"
                      ? Poland
                      : data.travelNations[0].nation === "체코"
                      ? Czech
                      : data.travelNations[0].nation === "오스트리아"
                      ? Asutria
                      : data.travelNations[0].nation === "슬로베니아"
                      ? Slovenian
                      : data.travelNations[0].nation === "크로아티아"
                      ? Croatia
                      : data.travelNations[0].nation === "보스니아 헤르체고비나"
                      ? Bosnia
                      : data.travelNations[0].nation === "그리스"
                      ? Greece
                      : data.travelNations[0].nation === "불가리아"
                      ? Bulgaria
                      : data.travelNations[0].nation === "터키"
                      ? Turkey
                      : data.travelNations[0].nation === "루마니아"
                      ? Romania
                      : data.travelNations[0].nation === "헝가리"
                      ? Hungary
                      : data.travelNations[0].nation === "핀란드"
                      ? Finland
                      : data.travelNations[0].nation === "러시아"
                      ? Russia
                      : // 아메리카
                      data.travelNations[0].nation === "캐나다"
                      ? Canada
                      : data.travelNations[0].nation === "미국"
                      ? USA
                      : data.travelNations[0].nation === "멕시코"
                      ? Mexico
                      : data.travelNations[0].nation === "쿠바"
                      ? Cuba
                      : data.travelNations[0].nation === "바하마"
                      ? Bahamas
                      : data.travelNations[0].nation === "자메이카"
                      ? Jmaica
                      : data.travelNations[0].nation === "콜롬비아"
                      ? Colombia
                      : data.travelNations[0].nation === "에콰도르"
                      ? Ecuador
                      : data.travelNations[0].nation === "페루"
                      ? Peru
                      : data.travelNations[0].nation === "칠레"
                      ? Chile
                      : data.travelNations[0].nation === "볼리비아"
                      ? Bolivia
                      : data.travelNations[0].nation === "브라질"
                      ? Brazil
                      : data.travelNations[0].nation === "아르헨티나"
                      ? Argentina
                      : // 남태평양
                      data.travelNations[0].nation === "괌"
                      ? Guam
                      : data.travelNations[0].nation === "사이판"
                      ? saipan
                      : data.travelNations[0].nation === "오스트레일리아"
                      ? Austrailia
                      : data.travelNations[0].nation === "뉴칼레도니아"
                      ? New_Caledonia
                      : data.travelNations[0].nation === "피지"
                      ? Fiji
                      : data.travelNations[0].nation === "뉴질랜드"
                      ? Newzealand
                      : data.travelNations[0].nation === "프렌치폴리네시아"
                      ? Polynesia
                      : Null
                  }
                />
              </Link>
              <PostContent>
                <PostTitle>{data.title}</PostTitle>
                <PostDescription>
                  {data.travelNations.map((nation, index) => {
                    const isDuplicate = data.travelNations
                      .slice(0, index)
                      .some((prevNation) => prevNation.city === nation.city);
                    if (isDuplicate) {
                      return "";
                    }
                    return (
                      <span style={{ fontSize: "12px" }} key={nation.city}>
                        {nation.city},
                      </span>
                    );
                  })}
                </PostDescription>
                <PostDate>
                  기간 : {data.period}
                  <span>
                    <span
                      style={{
                        color: "red",
                        fontSize: "19px",
                      }}
                      class="material-symbols-outlined"
                    >
                      favorite
                    </span>
                    <span
                      style={{
                        position: "relative",
                        top: "-5px",
                        left: "3px",
                        fontSize: "14px",
                      }}
                    >
                      {data.likecount}
                    </span>
                  </span>
                </PostDate>
              </PostContent>
            </Post>
          ))}
      </PostContainer>
    </BestPlanContainer>
  );
};

export default BestPlan;
