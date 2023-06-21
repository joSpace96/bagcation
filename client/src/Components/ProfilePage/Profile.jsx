import React, { useState } from "react";
import {
  HeaderButton,
  HeaderTitle,
  MyImg,
  MypageContainer,
  MypageHeader,
  MypagePlanInner,
  MypageTopCover,
} from "./ProfileSty";
import { useEffect } from "react";
import axios from "axios";
import apiServer from "../../api/api";
import TopPlanMenu from "./Pages/TopPlanMenu";
import TopReviewMenu from "./Pages/TopReviewMenu";
import InnerPlan from "./Pages/InnerPages/InnerPlan";
import { useNavigate } from "react-router-dom";
import InnerReview from "./Pages/InnerPages/InnerReview";

const Profile = () => {
  const navigate = useNavigate();
  const NavigatePlanner = () => {
    navigate("/planner/map");
  };
  const [topMenu, setTopMenu] = useState("여행일정");
  const myName = localStorage.getItem("nick");
  const myKakaoName = localStorage.getItem("kakaonick");
  const [myPlan, setMyPlan] = useState([]);
  const [content, setContent] = useState(
    <TopPlanMenu NavigatePlanner={NavigatePlanner} />
  );
  const [innerContent, setInnerContent] = useState(
    <InnerPlan myPlan={myPlan} />
  );

  const handleChangeContent = (item) => {
    if (item === "여행일정") {
      setContent(<TopPlanMenu NavigatePlanner={NavigatePlanner} />);
      setInnerContent(<InnerPlan myPlan={myPlan} />);
    }
    if (item === "리뷰") {
      setContent(<TopReviewMenu NavigatePlanner={NavigatePlanner} />);
      setInnerContent(<InnerReview />);
    }
  };
  useEffect(() => {
    const url = document.location.href;
    const splitUrl = url.split("/");
    const user_idx = splitUrl[splitUrl.length - 1];

    axios
      .get(`${apiServer}/user/find-by-id?idx=${user_idx}`)
      .then((response) => {
        const user = response.data;
        const my_idx = user.idx;
        console.log(my_idx);
        axios
          .get(`${apiServer}/plans/get_my_plan?user_idx=${my_idx}`)
          .then((response) => {
            const my_plan = response.data;
            setMyPlan(my_plan.post);
          });
      });
  }, []);
  useEffect(() => {
    handleChangeContent("여행일정");
  }, [myPlan]);
  const handleMenu = (menu) => {
    setTopMenu(menu);
  };

  return (
    <MypageContainer>
      <MypageHeader>
        <MypageTopCover>
          <MyImg>{myKakaoName || myName}님의 페이지</MyImg>
          <HeaderTitle>{topMenu}</HeaderTitle>
        </MypageTopCover>
        <div
          style={{
            border: "1px solid black",
            height: "40px",
            backgroundColor: " #223b68",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 auto",
              width: "1094px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <HeaderButton
                onClick={() => {
                  handleMenu("여행일정");
                  handleChangeContent("여행일정");
                }}
              >
                여행일정
              </HeaderButton>
              <HeaderButton
                onClick={() => {
                  handleMenu("리뷰");
                  handleChangeContent("리뷰");
                }}
              >
                리뷰
              </HeaderButton>
              <HeaderButton onClick={() => handleMenu("여행TIP")}>
                여행TIP
              </HeaderButton>
            </div>
            <HeaderButton>설정</HeaderButton>
          </div>
        </div>
      </MypageHeader>
      {content}
      <MypagePlanInner>{innerContent}</MypagePlanInner>
    </MypageContainer>
  );
};

export default Profile;
