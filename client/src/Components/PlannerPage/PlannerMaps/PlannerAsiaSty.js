import { styled } from "styled-components";
import europe from "../images/europe.png";
import europeHover from "../images/europehover.png";
import asia from "../images/asia.png";
import asiaHover from "../images/asiahover.png";
import america from "../images/america.png";

export const PlannerDiary = styled.div`
  border-radius: 5px;
  position: absolute;
  right: 0px;
  top: 60px;
  width: 20%;
  height: 90vh;
  background-color: whitesmoke;
  padding-bottom: 10px;
  button {
    border-radius: 10px;
    width: 100px;
    position: absolute;
    bottom: 0;
    right: -20%;
    left: 0;
    margin: auto;
    cursor: pointer;
    background-color: #0055ff;
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
  margin-left: 30%;
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
  top: 70px;
  height: 84vh;
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
  background-color: #f7f7f7;
  background-size: cover;
  font-weight: bold;
  &:hover {
    background-image: url(${asiaHover}) !important;
    background-color: #0055ff;
    color: white;
  }
  div {
    margin-top: 12px;
    padding: 15px;
  }
`;

export const EuropeButton = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  font-weight: bold;
  background-image: url(${europe});
  background-color: #f7f7f7;
  background-size: cover;
  &:hover {
    background-image: url(${europeHover}) !important;
    color: white;
    background-color: #0055ff;
  }
  div {
    padding: 20px;
    margin-top: 14px;
    margin-left: 5px;
  }
`;

export const AmericaButton = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  font-weight: bold;
  background-image: url(${america});
  background-color: #f7f7f7;
  background-size: cover;
  &:hover {
    background-image: url(${america}) !important;
    color: white;
    background-color: #0055ff;
  }
  div {
    padding: 20px;
    margin-top: 14px;
    margin-left: 5px;
  }
`;
