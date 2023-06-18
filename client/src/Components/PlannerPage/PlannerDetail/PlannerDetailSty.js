import { styled } from "styled-components";

export const TodoContainer = styled.div`
  width: 110px;
  padding: 10px;
  margin-left: 10px;
  position: absolute;
  top: 72px;
  z-index: 5;
  background-color: white;
  height: 86vh;
  overflow: hidden;
`;
export const TodoInput = styled.div`
  display: flex;
  margin-bottom: 10px;
  input {
    flex: 1;
    padding: 5px;
    margin-right: 10px;
  }
`;
export const TodoList = styled.div`
  max-width: 130px;
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
`;
export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const TodoText = styled.div`
  flex: 1;
`;

export const TodoBrand = styled.div`
  margin: 10px 10px 10px 20px;
  display: flex;
`;

export const StartDate = styled.div`
  width: 110px;
  font-size: 12px;
  text-align: center;
  margin: -10px -10px 10px -10px;
  padding: 10px;
  background-color: #7bc0f9;
  color: white;
  font-weight: bold;
`;
