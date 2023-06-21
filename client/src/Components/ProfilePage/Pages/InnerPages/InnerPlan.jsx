import React, { useEffect } from "react";
import {
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
} from "../../../MainPage/BestPlan/BestPlanSty";
import { useNavigate } from "react-router-dom";

const InnerPlan = ({ myPlan }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("이너플랜페이지 : ", myPlan);
  }, [myPlan]);

  const ClickMyPlan = (idx) => {
    navigate(`/planner/post/${idx}`);
  };
  return (
    <div>
      <PostContainer style={{ margin: "0 auto" }}>
        {myPlan.slice(0, 6).map((data) => (
          <Post
            onClick={() => ClickMyPlan(data.idx)}
            style={{ cursor: "pointer" }}
            key={data.idx}
          >
            <PostContent>
              <PostTitle>{data.title.split("s")[1]}</PostTitle>
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
    </div>
  );
};

export default InnerPlan;
