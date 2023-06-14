import { styled } from "styled-components";
import europe from "../images/europe.png";
import europeHover from "../images/europehover.png";
import asia from "../images/asia.png";
import asiaHover from "../images/asiahover.png";
import america from "../images/north-america.png";
import americaHover from "../images/north-america_hover.png";
import oceaniaHover from "../images/australia.png";
import oceania from "../images/australia_hover.png";

export const PlannerDiary = styled.div`
  border-radius: 5px;
  position: absolute;
  right: 0px;
  top: 60.5px;
  width: 20%;
  height: 858px;
  background-color: whitesmoke;
  padding-bottom: 10px;
  button {
    border-radius: 10px;
    width: 150px;
    height: 40px;
    position: absolute;
    bottom: 0;
    right: -20%;
    left: 0;
    margin: auto;
    cursor: pointer;
    background-color: #7bc0f9;
    color: gray;
    font-weight: bold;
    &:hover {
      background-color: #0055ff;
      color: white;
    }
  }
`;
export const PlannerHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #0055ff;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  font-weight: bold;
  color: wheat;
  div {
    margin: auto;
  }
  span {
    cursor: pointer;
    z-index: 1;
    &:hover {
      color: aquamarine;
    }
  }
`;

export const PlannerInput = styled.div`
  border: 1px solid #ccc;
  width: 70%;
  height: 20px;
  margin: auto;
  margin-bottom: 0px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-family: "Arial", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: gray;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ebebeb;
    color: black;
  }
`;
export const PlannerDistance = styled.div`
  width: 200px;
  height: 50px;
  margin-top: -10px;
  margin-bottom: -10px;
  margin-left: 20%;
  background-color: transparent;
  color: #333;
  font-family: "Segoe UI", sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const ContinentButton = styled.div`
  border: none;
  float: left;
  display: flex;
  width: 80px;
  flex-direction: column;
  height: 814px;
  border-radius: 5px;
  background-color: #0055ff;
  z-index: -1;
`;

export const AsiaButton = styled.div`
  margin-top: -10px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  background-image: url(${asia});
  background-color: #0055ff;
  background-size: cover;
  font-weight: bold;
  color: white;
  &:hover {
    background-image: url(${asiaHover}) !important;
    background-color: #7bc0f9;
    color: gray;
    div {
      background-color: #7bc0f9;
    }
  }
  div {
    text-align: center;
    font-size: 15px;
    margin-top: 80px;
    background-color: #0055ff;
  }
`;

export const EuropeButton = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  font-weight: bold;
  background-image: url(${europe});
  background-color: #0055ff;
  background-size: cover;
  margin-top: 20px;
  color: white;
  &:hover {
    background-image: url(${europeHover}) !important;
    background-color: #7bc0f9;
    color: gray;
    div {
      background-color: #7bc0f9;
    }
  }
  div {
    text-align: center;
    font-size: 15px;
    margin-top: 80px;
    background-color: #0055ff;
  }
`;

export const AmericaButton = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  font-weight: bold;
  background-image: url(${america});
  background-color: #0055ff;
  background-size: cover;
  margin-top: 20px;
  color: white;
  &:hover {
    background-image: url(${americaHover}) !important;
    background-color: #7bc0f9;
    color: gray;
    div {
      background-color: #7bc0f9;
    }
  }
  div {
    text-align: center;
    font-size: 15px;
    margin-top: 80px;
    background-color: #0055ff;
  }
`;
export const OceaniaButton = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-image: url(${oceania});
  background-color: #0055ff;
  background-size: cover;
  margin-top: 20px;
  &:hover {
    background-image: url(${oceaniaHover}) !important;
    color: gray;
    background-color: #7bc0f9;
    div {
      background-color: #7bc0f9;
    }
  }
  div {
    text-align: center;
    font-size: 15px;
    margin-top: 80px;
    background-color: #0055ff;
  }
`;
