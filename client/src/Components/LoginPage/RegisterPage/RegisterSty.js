import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  flex: 1;
`;

export const Header = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: lightgray;
  color: gray;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

export const Warning = styled.span`
  font-size: 12px;
  color: red;
  margin-bottom: 10px;
  padding: 1px;
`;
