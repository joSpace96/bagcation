import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const PlanBaordContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: max-content;
  justify-content: center;
`;

export const PlannerBanner = styled.div`
  width: 100%;
  height: 580px;
  background-color: #7bc0f9;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const PlanBoardSlogan = styled.div`
  width: 1092px;
  position: relative;
  bottom: 230px;
  height: max-content;
  text-align: center;
  font-size: 40px;
  font-family: "nanum_b";
  color: white;
`;

export const BannerImgBox = styled.div`
  position: absolute;
  top: 130px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  img {
    height: 300px;
    width: 100%;
  }
`;

export const InBannerButtonL = styled.span`
  margin-right: 150px;
  margin-left: -25px;
  padding: 1rem;
  background-color: lightgreen;
  border-radius: 10px;
  cursor: pointer;
  font-family: "nanum_b";
  font-weight: bold;
  color: #555555;
  &:hover {
    background-color: #5d9c59;
    color: white;
  }
`;
export const InBannerButtonR = styled.span`
  padding: 1rem;
  background-color: lightgreen;
  border-radius: 10px;
  cursor: pointer;
  font-family: "nanum_b";
  font-weight: bold;
  color: #555555;
  &:hover {
    background-color: #5d9c59;
    color: white;
  }
`;

export const BannerLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
