import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostTitle,
} from "../../../MainPage/BestPlan/BestPlanSty";
import Paging from "../../../PlannerPage/Paging/Paging";
import { useState } from "react";

const InnerLikePlan = ({ myLike }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const offset = (page - 1) * limit;

  const ClickMyPlan = (idx) => {
    navigate(`/planner/post/${idx}`);
  };

  return (
    <div>
      <PostContainer style={{ margin: "0 auto" }}>
        {myLike.slice(offset, offset + limit).map((data) => (
          <Post
            onClick={() => ClickMyPlan(data.idx)}
            style={{ cursor: "pointer" }}
            key={data.idx}
          >
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
      <Paging
        total={myLike.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default InnerLikePlan;
