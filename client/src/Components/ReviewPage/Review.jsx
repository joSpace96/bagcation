import React from "react";
import {
  NewReview,
  ReviewContainer,
  ReviewContent,
  ReviewHeader,
  ReviewImg,
  ReviewMetadata,
  ReviewText,
  UserImg,
  UserInfo,
  UserName,
} from "./ReviewSty";
import testbtn from "./Image/KakaoTalk_20230622_142959527.png";

import test from "../ProfilePage/image/rest-sunshine-atoll-bungalow-holiday.jpg";
import user_Test from "../MainPage/BestPlan/PostMainImages/null.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Overlay, OverlayContent } from "../LedgerPage/LedgerSty";
import { LedgerAddSubmit } from "../LedgerPage/LedgerDetailPage/LedgerDetailSty";
import EditReview from "./EditReview";
import EditReviewContent from "./EditReviewContent";
import { useEffect } from "react";
const Review = () => {
  const ChangeEditContent = () => {
    setEditContent(<EditReviewContent />);
  };
  const ExistEdit = () => {
    setEditContent(<EditReview ChangeEditContent={ChangeEditContent} />);
  };

  const [OverlayVisible, setOverlayVisible] = useState(false);
  const [EditContent, setEditContent] = useState(
    <EditReview ChangeEditContent={ChangeEditContent} />
  );

  const showOverlay = () => {
    setOverlayVisible(true);
  };

  const hideOverlay = () => {
    setOverlayVisible(false);
  };
  return (
    <>
      <ReviewHeader>
        <span>여행자들의 리뷰보기</span>
        <div style={{ cursor: "pointer" }} onClick={showOverlay}>
          <NewReview src={testbtn} />
          <div style={{ fontSize: "20px", lineHeight: "10px" }}>글쓰기</div>
        </div>
      </ReviewHeader>
      <div
        style={{
          border: "1px solid black",
          height: "max-content",
          width: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <ReviewContainer>
          <UserInfo>
            <UserImg src={user_Test} />
            <UserName>John Doe</UserName>
          </UserInfo>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/reivew/detail"}
          >
            <ReviewImg src={test} />
          </Link>
          <ReviewContent>
            <ReviewText>Amazing trip to beautiful destinations!</ReviewText>
            <ReviewMetadata>
              <span>10</span>
              <span>5</span>
            </ReviewMetadata>
          </ReviewContent>
          {OverlayVisible && (
            <Overlay>
              <OverlayContent>
                {EditContent}
                <LedgerAddSubmit
                  onClick={() => {
                    hideOverlay();
                    ExistEdit();
                  }}
                >
                  닫기
                </LedgerAddSubmit>
              </OverlayContent>
            </Overlay>
          )}
        </ReviewContainer>
      </div>
    </>
  );
};

export default Review;
