import React from "react";
import {
  MypageTab,
  MypageTopInner,
  MypageTopMenu,
  NavPlannerButton,
} from "../ProfileSty";

const TopReviewMenu = ({ NavigateReview }) => {
  return (
    <div>
      <MypageTopMenu>
        <MypageTopInner>
          <div style={{ height: "44px" }}>
            <MypageTab>완성된 리뷰</MypageTab>
            <MypageTab style={{ border: "none" }}>좋아한 리뷰</MypageTab>
          </div>
          <div style={{ height: "44px" }}>
            <NavPlannerButton onClick={NavigateReview}>
              리뷰 쓰기
            </NavPlannerButton>
          </div>
        </MypageTopInner>
      </MypageTopMenu>
    </div>
  );
};

export default TopReviewMenu;
