import { styled } from "styled-components";

export const GuideContainer = styled.div`
  width: 1000px;
  position: absolute;
  top: 100px;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border: none;
  border-radius: 30px;
  background-color: ivory;
`;

export const GuideInput = styled.input`
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 150px;
  border: none;
  border-radius: 30px;
  box-shadow: 0.5px 1px 1px 1px gray;
  width: 600px;
  height: 15px;
  padding: 20px;
`;

export const SubmitButton = styled.button`
  border: none;
  box-shadow: 0.5px 1px 1px 1px gray;
  border-radius: 50px;
  position: absolute;
  bottom: 10px;
  right: 155px;
  height: 50px;
  width: 50px;
  background-color: lightgray;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
export const TargetPrint = styled.div`
  position: relative;
  border: none;
  box-shadow: 0.5px 1px 1px 1px gray;
  background-color: white;
  border-radius: 10px;
  height: 25px;
  width: 400px;
  margin-top: 10px;
  margin-left: 15px;
  padding: 1rem;

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: transparent transparent gray transparent;
    border-width: 8px;
    top: 45px;
    left: -10px;
  }
`;

export const InputPrint = styled.div`
  position: relative;
  border: none;
  box-shadow: 0.5px 1px 1px 1px gray;
  background-color: white;
  border-radius: 20px;
  height: 25px;
  padding: 1rem;
  width: 400px;
  margin-top: 10px;
  margin-left: 55.6%;

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: transparent transparent gray transparent;
    border-width: 8px;
    top: 42px;
    right: -8px;
  }
`;
