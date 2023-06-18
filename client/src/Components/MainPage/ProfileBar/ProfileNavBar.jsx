import React from "react";
import {
  BagContents,
  ContentsCounter,
  ContentsIcon1,
  ContentsIcon2,
  ContentsIcon3,
  ContentsName,
  ProfileBarContainer,
  ProfilePicture,
  UserName,
} from "./ProfileNavSty";
import NonProfile from "./images/free-icon-profile-4675250.png";
import { Link } from "react-router-dom";

const ProfileNavBar = () => {
  const email = localStorage.getItem("email");
  const nick = localStorage.getItem("nick");
  const kakaonick = localStorage.getItem("kakaonick");
  const kakaoprofile = localStorage.getItem("kakaoprofile");
  const profileImage = kakaoprofile || NonProfile;

  if (!email && !kakaonick) {
    return null; // 이메일 정보가 없으면 아무것도 렌더링하지 않음
  }
  return (
    <ProfileBarContainer>
      <ProfilePicture src={profileImage} />
      <UserName>{kakaonick || nick} </UserName>
      <BagContents>
        <div style={{ display: "inline-block" }}>
          <ContentsName>클립보드</ContentsName>
          <ContentsCounter>0</ContentsCounter>
        </div>
        <div style={{ display: "inline-block" }}>
          <ContentsName>여행일정</ContentsName>
          <ContentsCounter>0</ContentsCounter>
        </div>
        <div style={{ display: "inline-block" }}>
          <ContentsName>리뷰</ContentsName>
          <ContentsCounter>0</ContentsCounter>
        </div>
        <div style={{ display: "inline-block" }}>
          <ContentsName>Q&A</ContentsName>
          <ContentsCounter>0</ContentsCounter>
        </div>
      </BagContents>
      <div style={{ display: "inline-block" }}>
        <Link style={{ color: "black" }} to={"/planner"}>
          <ContentsIcon1>
            <span class="material-symbols-outlined">calendar_month</span>
            <div>일정만들기</div>
          </ContentsIcon1>
        </Link>
        <ContentsIcon2>
          <span class="material-symbols-outlined">stylus_note</span>
          <div>리뷰쓰기</div>
        </ContentsIcon2>
        <ContentsIcon3>
          <span class="material-symbols-outlined">tips_and_updates</span>
          <div>질문하기</div>
        </ContentsIcon3>
      </div>
    </ProfileBarContainer>
  );
};

export default ProfileNavBar;
