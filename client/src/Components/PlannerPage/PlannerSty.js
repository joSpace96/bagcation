import { styled } from "styled-components";
import { Search } from "./../NavBar/NavBarSty";

export const PlannerContainer = styled.div`
  display: flex;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  width: 1700px;
  height: 700px;
  margin: 100px;
  justify-content: space-between;
`;

export const PlannerMaps = styled.div`
  border: none;
  background-color: white;
  width: 1000px;
  height: 700px;
  margin: 0 50px 50px 50px;
  background-color: transparent;
  overflow: hidden;
  box-shadow: 1px 1px 6px 1px gray;
  border-radius: 30px;
  .hovered-city {
    position: absolute;
    top: 20%;
    left: 35%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const PlannerDiary = styled.div`
  border: none;
  border-radius: 30px;
  background-color: white;
  width: 500px;
  height: 700px;
  margin: 0 50px 50px 50px;
  box-shadow: 1px 1px 6px 1px gray;
`;

export const AddPlanButton = styled.button`
  position: relative;
  top: 93%;
  right: 18%;
  height: 25px;
  width: 30px;
  outline: none;
  border-radius: 10px;
  background-color: lightgray;
  z-index: 1;
  &:hover {
    background-color: gray;
  }
`;

export const PlannerLogo = styled.div`
  position: absolute;
  top: 80px;
  left: 45%;
  bottom: 0;
  font-size: 50px;
  margin: auto;
  font-family: "Dancing Script", cursive;
`;

export const GoogleMap = styled.div`
  border-radius: 20px;
  height: 680px;
  margin: 10px;
`;

export const SelectAddress = styled.div`
  width: 70%;
  height: 30px;
  text-align: center;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px 1px gray;
  background-color: white;
  color: black;
  margin: auto;
  margin-top: 10px;
`;
export const SelectAddressMap = styled.div`
  width: 70%;
  border: none;
  box-shadow: 1px 1px 6px 1px gray;
  background-color: ivory;
  margin: 1rem;
`;

export const AddressDeleteButton = styled.button`
  margin-left: 15px;
  border: none;
  border-radius: 10px;
  background-color: lightgray;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
