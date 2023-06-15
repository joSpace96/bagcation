import { styled } from "styled-components";

export const TodoContainer = styled.div`
  width: 400px;
  margin: 0 0 0 50px;
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
  button {
    padding: 5px 10px;
    background-color: #0095f6;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;
export const TodoList = styled.div`
  max-width: 200px;
  overflow: auto;
  max-height: 65vh;
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
export const TodoDelete = styled.button`
  padding: 5px 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const TodoMemoContainer = styled.div`
  border: none;
  width: 400px;
  height: 65vh;
  position: relative;
  border-radius: 0 5px 5px 0;
  top: 184px;
  left: -110px;
  background-color: gray;
`;
