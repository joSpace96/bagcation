import React from "react";
import {
  MypageTab,
  MypageTopInner,
  MypageTopMenu,
  NavPlannerButton,
} from "../ProfileSty";

const TopReviewMenu = ({ NavigatePlanner }) => {
  return (
    <div>
      <MypageTopMenu>
        <MypageTopInner>
          <div style={{ height: "44px" }}>
            <MypageTab>완성된 리뷰</MypageTab>
            <MypageTab style={{ border: "none" }}>좋아한 리뷰</MypageTab>
          </div>
          <div style={{ height: "44px" }}>
            <NavPlannerButton onClick={NavigatePlanner}>
              여행일정 만들기
            </NavPlannerButton>
          </div>
        </MypageTopInner>
      </MypageTopMenu>
    </div>
  );
};

export default TopReviewMenu;
