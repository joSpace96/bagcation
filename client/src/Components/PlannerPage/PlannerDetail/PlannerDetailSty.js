import { styled } from "styled-components";

export const TodoContainer = styled.div`
  width: 400px;
  margin: 0;
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
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 220px;
  top: 155px;

  .memo-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-right: 10px;
    }

    .add-button {
      background-color: #3897f0;
      color: white;
      border: none;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #3367d6;
      }
    }
  }
  .memo-form {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    input[type="text"],
    textarea {
      flex: 1;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 10px;
      font-size: 14px;
    }

    button {
      background-color: #3897f0;
      color: white;
      border: none;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #3367d6;
      }
    }
  }
  .memo-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }

  .memo-card {
    background-color: white;
    border: 1px solid #e6e6e6;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .memo-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .memo-caption {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .memo-date {
      font-size: 12px;
      color: #999999;
    }
  }
`;
export const TodoBrand = styled.div``;

export const StartDate = styled.div``;
