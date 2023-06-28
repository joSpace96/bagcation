import { styled } from "styled-components";

export const ScheduleContainer = styled.div`
  margin-left: 10px;
  width: 9.4%;
  position: absolute;
  top: 70px;
  left: 190px;
`;

export const AddSchedulContainer = styled.div`
  width: 22%;
  height: 82vh;
  position: absolute;
  top: 80px;
  left: 320px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 0;
`;

export const StyledInput = styled.input`
  width: 97%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const StyledDiv = styled.div`
  width: 97%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const StyledTextarea = styled.textarea`
  width: 97%;
  padding: 10px;
  margin: 10px auto;
  border: none;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  resize: vertical;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #7bc0f9;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: #0055ff;
  }
`;

export const ScheduleList = styled.ul`
  width: 140px;
  margin: 0 0 0 -50px;
  height: 86vh;
  list-style: none;
  padding: 10px;
  overflow-y: scroll;
  text-overflow: ellipsis;
  background-color: #f9f9f9;
  border-radius: 5px;
`;
export const StyledListItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ isSelected }) => (isSelected ? "auto" : "20px")};
  margin-bottom: 10px;
  padding: 5px;
  background-color: ${({ hasContent }) => (hasContent ? "#e1f5fe" : "#ffffff")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: ${({ isSelected }) => isSelected && "2px solid #7bc0f9"};
  cursor: pointer;
  transition: height 0.3s;
  color: gray;

  &:hover {
    background-color: ${({ hasContent }) =>
      hasContent ? "#b3e5fc" : "#f9f9f9"};
    color: black;
  }
`;
