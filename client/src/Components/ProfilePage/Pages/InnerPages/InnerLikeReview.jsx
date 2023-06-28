import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Post,
  PostContainer,
  PostTitle,
} from "../../../PlannerPage/PlannerPost/PopularPostSty";
import Paging from "../../../PlannerPage/Paging/Paging";

const InnerLikeReview = ({ myReviewLike }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const offset = (page - 1) * limit;
  console.log("받아온 나의 리뷰", myReviewLike);

  const ClickMyReview = (id) => {
    navigate(`/reivew/detail/${id}`);
  };
  return (
    <div>
      <PostContainer>
        {myReviewLike.slice(offset, offset + limit).map((data) => (
          <Post
            onClick={() => ClickMyReview(data.id)}
            style={{ cursor: "pointer", width: "300px", textAlign: "center" }}
            key={data.id}
          >
            <div
              style={{
                width: "max-content",
                backgroundColor: "white",
                margin: "10px auto",
              }}
            >
              <PostTitle>{data.title}</PostTitle>
              <div>
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={data.imageUrl[0]}
                />
              </div>
            </div>
          </Post>
        ))}
      </PostContainer>
      <Paging
        total={myReviewLike.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default InnerLikeReview;
