import { styled } from "styled-components";

export const PlannerPostContainer = styled.div`
  border-radius: 20px;
  background-color: white;
  position: relative;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 1000px;
  padding-top: 50px;
  padding-bottom: 50px;
  height: max-content;
`;
export const PostHeader = styled.div`
  width: 800px;
  margin: auto;
  height: 50px;
  padding: 20px;
  text-align: center;
  background-color: #7bc0f9;
  color: ivory;
  font-weight: bold;
`;
export const PostScheduleMap = styled.div`
  width: 800px;
  margin-right: 80px;
  height: 400px;
`;

export const PostScheduleList = styled.div`
  width: 800px;
  height: 360px;
  margin-left: 80px;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 20px;
  margin-right: 20px;
  overflow-y: scroll;
`;

export const PostScheduleItems = styled.div`
  width: 200px;
  margin: auto;
  font-weight: bold;
  border-radius: 5px;
  border: ${(props) => (props.expanded ? "2px" : "1px")} none;
  padding: ${(props) => (props.expanded ? "10px" : "5px")};
  background-color: ${(props) => (props.expanded ? "#3964e5" : "#7bc0f9")};
  color: ${(props) => (props.expanded ? "whitesmoke" : "gray")};
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 10px;
  &:hover {
    background-color: #3964e5;
    color: white;
  }
`;

export const PostTravelLocations = styled.div`
  height: max-content;
  width: 800px;
  margin: auto;
  padding: 20px;
  overflow-x: scroll;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PostListItem = styled.span`
  border: none;
  color: white;
  padding: 3px;
  background-color: #7bc0f9;
  font-weight: bold;
  width: max-content;
  margin: 13px;
`;
