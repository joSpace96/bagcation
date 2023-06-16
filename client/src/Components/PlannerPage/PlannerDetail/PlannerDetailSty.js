import { styled } from "styled-components";

export const TodoContainer = styled.div`
  width: 400px;
  padding: 20px;
`;
export const TodoHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
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
  max-width: 200px;
  overflow: auto;
  max-height: 77vh;
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

export const TodoBrand = styled.div``;

export const StartDate = styled.div``;
