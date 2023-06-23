import axios from "axios";
import React, { useEffect, useState } from "react";
import apiServer from "../../../../api/api";
import { useNavigate } from "react-router-dom";
import {
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostTitle,
} from "../../../PlannerPage/PlannerPost/PopularPostSty";
import Paging from "../../../PlannerPage/Paging/Paging";

const InnerReview = ({ myReview }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const offset = (page - 1) * limit;
  console.log("받아온 나의 리뷰", myReview);

  const ClickMyReview = (id) => {
    navigate(`/reivew/detail/${id}`);
  };
  return (
    <div>
      <PostContainer>
        {myReview.slice(offset, offset + limit).map((data) => (
          <Post
            onClick={() => ClickMyReview(data.id)}
            style={{ cursor: "pointer", width: "200px", textAlign: "center" }}
            key={data.id}
          >
            <PostContent>
              <PostTitle>{data.title}</PostTitle>
              <PostDescription>{data.user_nick}</PostDescription>
              <PostDate>
                {data.content}
                {/* <span>
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
              </span> */}
              </PostDate>
            </PostContent>
          </Post>
        ))}
      </PostContainer>
      <Paging
        total={myReview.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default InnerReview;
