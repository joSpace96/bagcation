import React, { useEffect, useMemo, useState } from "react";
import { PopularContainer, PopularList } from "./PopularPostSty";
import Asia from "../../MainPage/ImageGrid/images/Asia.jpg";
import {
  BestPlanContainer,
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
} from "../../PlannerPage/PlannerPost/PopularPostSty";
import { Link } from "react-router-dom";
import axios from "axios";
import apiServer from "../../../api/api";
import Null from "../../MainPage/BestPlan/PostMainImages/null.png";

// 아시아 이미지
import Japan from "../../MainPage/BestPlan/PostMainImages/asia/Japan.jpg";
import Korea from "../../MainPage/BestPlan/PostMainImages/asia/Korea.jpg";
import China from "../../MainPage/BestPlan/PostMainImages/asia/China.jpg";
import India from "../../MainPage/BestPlan/PostMainImages/asia/India.jpg";
import Taiwan from "../../MainPage/BestPlan/PostMainImages/asia/Taiwan.jpg";
import Phillipine from "../../MainPage/BestPlan/PostMainImages/asia/Philippines.jpg";
import Vietnam from "../../MainPage/BestPlan/PostMainImages/asia/Vietnam.jpg";
import Cambodia from "../../MainPage/BestPlan/PostMainImages/asia/Cambodia.jpg";
import Thailand from "../../MainPage/BestPlan/PostMainImages/asia/Thailand.jpg";
import Laos from "../../MainPage/BestPlan/PostMainImages/asia/Loas.jpg";
import Malaysia from "../../MainPage/BestPlan/PostMainImages/asia/Malaysia.jpg";
import Indonesia from "../../MainPage/BestPlan/PostMainImages/asia/Indonesia.jpg";
import Nepal from "../../MainPage/BestPlan/PostMainImages/asia/Nepal.jpg";
import UAE from "../../MainPage/BestPlan/PostMainImages/asia/UAE.jpg";
import Myanmar from "../../MainPage/BestPlan/PostMainImages/asia/Myanmar.jpg";

// 유럽 이미지
import Poland from "../../MainPage/BestPlan/PostMainImages/europe/Poland.jpg";
import Iceland from "../../MainPage/BestPlan/PostMainImages/europe/Iceland.jpg";
import England from "../../MainPage/BestPlan/PostMainImages/europe/England.jpg";
import Ireland from "../../MainPage/BestPlan/PostMainImages/europe/Ireland.jpg";
import Asutria from "../../MainPage/BestPlan/PostMainImages/europe/Austria.jpg";
import Belgium from "../../MainPage/BestPlan/PostMainImages/europe//Belgium.jpg";
import Bosnia from "../../MainPage/BestPlan/PostMainImages/europe//Bosnia.jpg";
import Bulgaria from "../../MainPage/BestPlan/PostMainImages/europe//Bulgaria.jpg";
import Croatia from "../../MainPage/BestPlan/PostMainImages/europe/Croatia.jpg";
import Czech from "../../MainPage/BestPlan/PostMainImages/europe/Czech.jpg";
import Denmark from "../../MainPage/BestPlan/PostMainImages/europe/Denmark.jpg";
import Finland from "../../MainPage/BestPlan/PostMainImages/europe/Finland.jpg";
import France from "../../MainPage/BestPlan/PostMainImages/europe/France.jpg";
import Germany from "../../MainPage/BestPlan/PostMainImages/europe/Germany.jpg";
import Greece from "../../MainPage/BestPlan/PostMainImages/europe/Greece.jpg";
import Hungary from "../../MainPage/BestPlan/PostMainImages/europe/Hungary.jpg";
import Italy from "../../MainPage/BestPlan/PostMainImages/europe//Italy.jpg";
import Netherlands from "../../MainPage/BestPlan/PostMainImages/europe/Netherlands.jpg";
import Norway from "../../MainPage/BestPlan/PostMainImages/europe/Norway.jpg";
import Romania from "../../MainPage/BestPlan/PostMainImages/europe/Romania.jpg";
import Russia from "../../MainPage/BestPlan/PostMainImages/europe/Russia.jpg";
import Spain from "../../MainPage/BestPlan/PostMainImages/europe/Russia.jpg";
import Slovenian from "../../MainPage/BestPlan/PostMainImages/europe/Slovenian.jpg";
import Sweden from "../../MainPage/BestPlan/PostMainImages/europe/Sweden.jpg";
import Swiss from "../../MainPage/BestPlan/PostMainImages/europe/Swiss.jpg";
import Turkey from "../../MainPage/BestPlan/PostMainImages/europe/Trukey.jpg";
import Portugal from "../../MainPage/BestPlan/PostMainImages/europe/Portugal.jpg";

// 아메리카 이미지
import Argentina from "../../MainPage/BestPlan/PostMainImages/america/Argentina.jpg";
import Bahamas from "../../MainPage/BestPlan/PostMainImages/america/Bahamas.jpg";
import Bolivia from "../../MainPage/BestPlan/PostMainImages/america/Bolivia.jpg";
import Brazil from "../../MainPage/BestPlan/PostMainImages/america/Brazil.jpg";
import Canada from "../../MainPage/BestPlan/PostMainImages/america/Canada.jpg";
import Chile from "../../MainPage/BestPlan/PostMainImages/america/Chile.jpg";
import Colombia from "../../MainPage/BestPlan/PostMainImages/america/Colombia.jpg";
import Cuba from "../../MainPage/BestPlan/PostMainImages/america/Cuba.jpg";
import Ecuador from "../../MainPage/BestPlan/PostMainImages/america/Ecuador.jpg";
import Jmaica from "../../MainPage/BestPlan/PostMainImages/america/Jamaica.jpg";
import Mexico from "../../MainPage/BestPlan/PostMainImages/america/Mexico.jpg";
import Peru from "../../MainPage/BestPlan/PostMainImages/america/Peru.jpg";
import USA from "../../MainPage/BestPlan/PostMainImages/america/USA.jpg";

// 남태평양 이미지
import Austrailia from "../../MainPage/BestPlan/PostMainImages/oceania/Austrailia.jpg";
import Fiji from "../../MainPage/BestPlan/PostMainImages/oceania/Fiji.jpg";
import Guam from "../../MainPage/BestPlan/PostMainImages/oceania/Guam.jpg";
import New_Caledonia from "../../MainPage/BestPlan/PostMainImages/oceania/New_caledonia.jpg";
import Newzealand from "../../MainPage/BestPlan/PostMainImages/oceania/Newzealand.jpg";
import Polynesia from "../../MainPage/BestPlan/PostMainImages/oceania/Polynesia.jpg";
import saipan from "../../MainPage/BestPlan/PostMainImages/oceania/Saipan.jpg";

import Paging from "./../Paging/Paging";

const PopularPost = ({
  selectedDestination,
  selectedDuration,
  selectedTheme,
  handleShowAllPosts,
  handleDestinationChange,
  handleDurationChange,
  handleThemeChange,
}) => {
  const [planPost, setPlanPost] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const offset = (page - 1) * limit;
  const [sortBy, setSortBy] = useState("인기");
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [filteredPost, setFilteredPost] = useState([]);
  const [sortedPost, setSortedPost] = useState([]);
  useEffect(() => {
    axios.get(`${apiServer}/plans/get_all_plan`).then((response) => {
      const data = response.data.All_post;
      setPlanPost(data);
    });
  }, []);

  useEffect(() => {
    handleDestinationChange(selectedDestination);
    setPage(1);
  }, [selectedDestination]);
  useEffect(() => {
    handleThemeChange(selectedTheme);
    setPage(1);
  }, [selectedTheme]);
  useEffect(() => {
    handleDurationChange(selectedDuration);
    setPage(1);
  }, [selectedDuration]);

  useEffect(() => {
    let filteredPosts = [...planPost];

    if (selectedDestination) {
      filteredPosts = filteredPosts.filter(
        (data) => data.travelNations[0].nation === selectedDestination
      );
    }

    if (selectedTheme) {
      filteredPosts = filteredPosts.filter(
        (data) => data.theme === selectedTheme
      );
    }
    if (selectedDuration) {
      if (Number(selectedDuration) < 15) {
        filteredPosts = filteredPosts.filter(
          (data) =>
            data.travelNations.length > Number(selectedDuration) - 1 &&
            data.travelNations.length < Number(selectedDuration) + 3
        );
      } else {
        filteredPosts = filteredPosts.filter(
          (data) => data.travelNations.length > Number(selectedDuration) - 1
        );
      }
    }
    setFilteredPost(filteredPosts);
  }, [planPost, selectedDestination, selectedTheme, selectedDuration]);

  useEffect(() => {
    let sortedPosts = [...filteredPost];

    if (sortBy === "신규") {
      sortedPosts.sort((a, b) => b.idx - a.idx); // Sort by data.idx in descending order
    } else if (sortBy === "인기") {
      sortedPosts.sort((a, b) => a.likecount - b.likecount); // Sort by data.likecount in ascending order
    }

    setSortedPost(sortedPosts);
  }, [filteredPost, sortBy]);

  const handleShowAll = () => {
    setFilteredPost(planPost);
    handleShowAllPosts();
  };

  return (
    <PopularContainer>
      <div style={{ marginLeft: "70px" }}>
        <span
          style={{
            borderRight: "3px solid gray",
            paddingRight: "1rem",
            cursor: "pointer",
            fontWeight: sortBy === "인기" ? "bold" : "normal",
          }}
          onClick={() => setSortBy("인기")}
        >
          인기
        </span>
        <span
          style={{
            paddingLeft: "1rem",
            cursor: "pointer",
            fontWeight: sortBy === "신규" ? "bold" : "normal",
          }}
          onClick={() => setSortBy("신규")}
        >
          신규
        </span>
        {!showAllPosts && (
          <span
            style={{
              paddingLeft: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
            onClick={handleShowAll}
          >
            전체보기
          </span>
        )}
      </div>
      <PopularList>
        <BestPlanContainer>
          <PostContainer>
            {sortedPost.slice(offset, offset + limit).map((data) => (
              <Post key={data.idx}>
                <Link to={`/planner/post/${data.idx}`}>
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
                        : data.travelNations[0].nation ===
                          "보스니아 헤르체고비나"
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
                <PostContent style={{ padding: "0.5rem", width: "365px" }}>
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
                    <span style={{ float: "right", marginRight: "10px" }}>
                      <span
                        style={{ color: "red" }}
                        class="material-symbols-outlined"
                      >
                        favorite
                      </span>
                      <span
                        style={{
                          position: "relative",
                          top: "-8px",
                          left: "0px",
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
      </PopularList>
      <Paging
        total={sortedPost.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </PopularContainer>
  );
};

export default PopularPost;
