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

import test from "../ProfilePage/image/rest-sunshine-atoll-bungalow-holiday.jpg";
import user_Test from "../MainPage/BestPlan/PostMainImages/null.png";
import { Link } from "react-router-dom";
const Review = () => {
  return (
    <>
      <ReviewHeader>
        <span>여행자들의 리뷰보기</span>
        <Link
          style={{ color: "black", textDecoration: "none", zIndex: 2 }}
          to={"/review/edit"}
        >
          <NewReview>새 리뷰</NewReview>
        </Link>
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
        </ReviewContainer>
      </div>
    </>
  );
};

export default Review;
