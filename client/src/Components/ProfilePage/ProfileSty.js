import { styled } from "styled-components";
import mypage_top from "./image/rest-sunshine-atoll-bungalow-holiday.jpg";
export const MypageContainer = styled.div``;

export const MypageTopCover = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const MypageHeader = styled.div`
  height: max-content;
  background-image: url(${mypage_top});
  background-size: cover;
`;
export const HeaderTitle = styled.div`
  height: 85px;
  padding: 35px 0 0;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.4);
  text-align: center;
  color: white;
  font-size: 50px;
`;
export const MyImg = styled.div`
  padding-top: 10px;
  height: 40px;
  width: max-content;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.4);
  text-align: center;
  color: white;
  font-size: 20px;
`;

export const HeaderButton = styled.div`
  height: 40px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

export const MypageTopMenu = styled.div`
  height: max-content;
`;

export const MypageTopInner = styled.div`
  width: 1096px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 0 0 0;
`;

export const MypageTab = styled.span`
  border-right: 1px solid gray;
  padding-right: 5px;
  padding-left: 5px;
  color: #555555;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  line-height: 42px;
`;

export const NavPlannerButton = styled.span`
  margin-right: 30px;
  border: 1px solid orange;
  height: 42px;
  line-height: 42px;
  min-width: 166px;
  padding: 5px 20px 5px 20px;
  cursor: pointer;
  color: white;
  font-size: 15px;
  font-weight: bold;
  background: #ff9320;
  text-align: center;
  font-family: nanum;
`;

export const MypagePlanInner = styled.div`
  width: 1096px;
  height: max-content;
  margin: 0 auto;
  padding: 40px 0 40px 0;
`;
