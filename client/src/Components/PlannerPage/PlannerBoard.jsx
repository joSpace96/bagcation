import React, { useState } from "react";
import {
  BannerImgBox,
  BannerLink,
  InBannerButtonL,
  InBannerButtonR,
  PlanBaordContainer,
  PlanBoardSlogan,
  PlannerBanner,
} from "./PlannerBoardSty";
import BannerImg from "./images/p_header_img_ko.jpg";
import PlannerSearch from "./PlannerSearch/PlannerSearch";
import PopularPost from "./PlannerPost/PopularPost";

const PlannerBoard = () => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleExpandToggle = (expand) => {
    // 확장 상태에 따른 처리
  };
  return (
    <PlanBaordContainer>
      <PlannerBanner>
        <PlanBoardSlogan>
          누구나 쉽게 일정을 계획할 수 있습니다.
        </PlanBoardSlogan>
        <BannerImgBox>
          <span>
            <img src={BannerImg} alt="" />
          </span>
          <div style={{ marginTop: "20px", justifyContent: "space-between" }}>
            <BannerLink to="/planner/map">
              <InBannerButtonL>
                <span
                  style={{ position: "relative", top: "5px", left: "-5px" }}
                  class="material-symbols-outlined"
                >
                  calendar_month
                </span>
                새로운 일정 만들기
              </InBannerButtonL>
            </BannerLink>
            <InBannerButtonR>
              <span
                style={{ position: "relative", top: "5px", left: "-5px" }}
                className="material-symbols-outlined"
              >
                search
              </span>
              나의 일정 보기
            </InBannerButtonR>
          </div>
        </BannerImgBox>
      </PlannerBanner>
      <PlannerSearch
        selectedDestination={selectedDestination}
        selectedDuration={selectedDuration}
        selectedTheme={selectedTheme}
        setSelectedDestination={setSelectedDestination}
        onDestinationChange={handleDestinationChange} // Pass the function as a prop
        onDurationChange={handleDurationChange}
        onThemeChange={handleThemeChange}
        onExpandToggle={handleExpandToggle}
      />
      <PopularPost
        selectedDestination={selectedDestination}
        selectedDuration={selectedDuration}
        selectedTheme={selectedTheme}
      />
    </PlanBaordContainer>
  );
};

export default PlannerBoard;
