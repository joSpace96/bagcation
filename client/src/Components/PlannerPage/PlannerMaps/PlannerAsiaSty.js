import { styled } from "styled-components";

export const PlannerDiary = styled.div`
  border-radius: 5px;
  position: absolute;
  right: 100px;
  top: 70px;
  width: 15%;
  height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: whitesmoke;
  padding-bottom: 10px;
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
  width: 80%;
  height: 20px;
  margin: auto;
  padding-left: 20px;
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
  margin-left: 40px;
  background-color: transparent;
  color: #333;
  font-family: "Segoe UI", sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
