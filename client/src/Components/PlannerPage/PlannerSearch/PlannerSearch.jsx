import React, { useState } from "react";
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

const PlannerSearch = () => {
  const [expand, setExpand] = useState(false);

  const handleExpandBtn = () => {
    if (expand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
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
                  <TableBody>국내</TableBody>
                  <TableBody>일본</TableBody>
                  <TableBody>홍콩</TableBody>
                  <TableBody>싱가포르</TableBody>
                  <TableBody>대만</TableBody>
                  <TableBody>태국</TableBody>
                  <TableBody>미국</TableBody>
                  <TableBody>프랑스</TableBody>
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
              <ExpandBoardIndex expand={expand} />
              <TableHeaderWrapper style={{ borderBottom: "none" }}>
                <TableHeader>여행일</TableHeader>
                <TableBodyWrapper>
                  <TableBody>1~3일</TableBody>
                  <TableBody>4~6일</TableBody>
                  <TableBody>7~10일</TableBody>
                  <TableBody>11~15일</TableBody>
                  <TableBody>15일 이상</TableBody>
                </TableBodyWrapper>
              </TableHeaderWrapper>
              <TableHeaderWrapper>
                <TableHeader>여행테마</TableHeader>
                <TableBodyWrapper>
                  <TableBody>가족여행</TableBody>
                  <TableBody>나홀로여행</TableBody>
                  <TableBody>커플여행</TableBody>
                  <TableBody>친구와함께</TableBody>
                  <TableBody>비즈니스여행</TableBody>
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
