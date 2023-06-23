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
import ParentsEditor from "./ParentsEditor";
import axios from "axios";
import apiServer from "../../api/api";
import Paging from "../PlannerPage/Paging/Paging";
const Review = () => {
  const [OverlayVisible, setOverlayVisible] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const offset = (page - 1) * limit;

  useEffect(() => {
    try {
      axios.get(`${apiServer}/review/get_all`).then((response) => {
        setReviewData(response.data.reviews);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(reviewData);
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
          height: "max-content",
          width: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {reviewData.slice(offset, offset + limit).map((review) => (
          <ReviewContainer>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/reivew/detail/${review.id}`}
            >
              <UserInfo>
                <UserName>{review.user_nick}</UserName>
              </UserInfo>
              <ReviewImg src={review.imageUrl[0]} />
            </Link>
            <ReviewContent>
              <ReviewText>{review.title}</ReviewText>
              <ReviewMetadata>
                <span>10</span>
                <span>5</span>
              </ReviewMetadata>
            </ReviewContent>
          </ReviewContainer>
        ))}
        {/* </ReviewContainer> */}
        {OverlayVisible && (
          <Overlay>
            <OverlayContent>
              <ParentsEditor hideOverlay={hideOverlay} />
              <LedgerAddSubmit
                onClick={() => {
                  hideOverlay();
                }}
              >
                닫기
              </LedgerAddSubmit>
            </OverlayContent>
          </Overlay>
        )}
      </div>
      <Paging
        total={reviewData.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Review;
