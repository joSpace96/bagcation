import React from "react";
import {
  MypageTab,
  MypageTopInner,
  MypageTopMenu,
  NavPlannerButton,
} from "../ProfileSty";

const TopPlanMenu = ({ NavigatePlanner, setChangePost }) => {
  const handleChangePost = (item) => {
    setChangePost(item);
  };

  return (
    <div>
      <MypageTopMenu>
        <MypageTopInner>
          <div style={{ height: "44px" }}>
            <MypageTab onClick={() => handleChangePost("완성")}>
              완성된 일정
            </MypageTab>
            <MypageTab
              onClick={() => handleChangePost("좋아요")}
              style={{ border: "none" }}
            >
              좋아한 일정
            </MypageTab>
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

export default TopPlanMenu;
