import React, { useEffect, useState } from "react";
import {
  LeftTable,
  PlanSearchContainer,
  SearchBox,
  Subject,
  TableBody,
  TableBodyWrapper,
  TableContainer,
  TableHeader,
  TableHeaderWrapper,
} from "./PlannerSearchSty";
import ExpandBoardIndex from "./Expand/ExpandBoardIndex";

const PlannerSearch = ({
  selectedDestination,
  selectedDuration,
  selectedTheme,
  setSelectedDestination,
  onDestinationChange,
  onDurationChange,
  onThemeChange,
  onExpandToggle,
}) => {
  const [expand, setExpand] = useState(false);

  const handleDestinationSelection = (destination) => {
    onDestinationChange(destination);
  };

  const handleDurationSelection = (duration) => {
    onDurationChange(duration);
  };

  const handleThemeSelection = (theme) => {
    onThemeChange(theme);
  };

  const handleExpandBtn = () => {
    setExpand(!expand);
    onExpandToggle(!expand);
  };
  return (
    <PlanSearchContainer>
      <Subject>여행자들의 일정보기</Subject>
      <SearchBox>
        <TableContainer>
          <LeftTable>
            <thead>
              <TableHeaderWrapper style={{ borderBottom: "none" }}>
                <TableHeader>여행지</TableHeader>
                <TableBodyWrapper>
                  <TableBody
                    onClick={() => handleDestinationSelection("대한민국")}
                  >
                    국내
                  </TableBody>
                  <TableBody onClick={() => handleDestinationSelection("일본")}>
                    일본
                  </TableBody>
                  <TableBody onClick={() => handleDestinationSelection("홍콩")}>
                    홍콩
                  </TableBody>
                  <TableBody
                    onClick={() => handleDestinationSelection("싱가포르")}
                  >
                    싱가포르
                  </TableBody>
                  <TableBody onClick={() => handleDestinationSelection("대만")}>
                    대만
                  </TableBody>
                  <TableBody onClick={() => handleDestinationSelection("태국")}>
                    태국
                  </TableBody>
                  <TableBody onClick={() => handleDestinationSelection("미국")}>
                    미국
                  </TableBody>
                  <TableBody
                    onClick={() => handleDestinationSelection("프랑스")}
                  >
                    프랑스
                  </TableBody>
                  <TableBody
                    style={{
                      position: "relative",
                      right: "-180px",
                    }}
                  >
                    {expand ? (
                      <span
                        class="material-symbols-outlined"
                        onClick={handleExpandBtn}
                      >
                        expand_less
                      </span>
                    ) : (
                      <span
                        class="material-symbols-outlined"
                        onClick={handleExpandBtn}
                      >
                        expand_more
                      </span>
                    )}
                  </TableBody>
                </TableBodyWrapper>
              </TableHeaderWrapper>
              <ExpandBoardIndex
                expand={expand}
                setSelectedDestination={setSelectedDestination}
              />
              <TableHeaderWrapper style={{ borderBottom: "none" }}>
                <TableHeader>여행일</TableHeader>
                <TableBodyWrapper>
                  <TableBody onClick={() => handleDurationSelection("1~3일")}>
                    1~3일
                  </TableBody>
                  <TableBody onClick={() => handleDurationSelection("4~6일")}>
                    4~6일
                  </TableBody>
                  <TableBody onClick={() => handleDurationSelection("7~10일")}>
                    7~10일
                  </TableBody>
                  <TableBody onClick={() => handleDurationSelection("11~15일")}>
                    11~15일
                  </TableBody>
                  <TableBody
                    onClick={() => handleDurationSelection("15일 이상")}
                  >
                    15일 이상
                  </TableBody>
                </TableBodyWrapper>
              </TableHeaderWrapper>
              <TableHeaderWrapper>
                <TableHeader>여행테마</TableHeader>
                <TableBodyWrapper>
                  <TableBody onClick={() => handleThemeSelection("가족여행")}>
                    가족여행
                  </TableBody>
                  <TableBody onClick={() => handleThemeSelection("나홀로여행")}>
                    나홀로여행
                  </TableBody>
                  <TableBody onClick={() => handleThemeSelection("커플여행")}>
                    커플여행
                  </TableBody>
                  <TableBody onClick={() => handleThemeSelection("친구와함께")}>
                    친구와함께
                  </TableBody>
                  <TableBody
                    onClick={() => handleThemeSelection("비즈니스여행")}
                  >
                    비즈니스여행
                  </TableBody>
                </TableBodyWrapper>
              </TableHeaderWrapper>
            </thead>
          </LeftTable>
        </TableContainer>
      </SearchBox>
    </PlanSearchContainer>
  );
};

export default PlannerSearch;
