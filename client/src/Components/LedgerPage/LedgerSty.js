import { styled } from "styled-components";

export const LedgerContainer = styled.div`
  display: flex;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  width: 1700px;
  height: 700px;
  margin: 100px;
  justify-content: space-between;
`;

export const LedgerBillContainer = styled.div`
  border: none;
  border-radius: 30px;
  background-color: white;
  width: 700px;
  height: 700px;
  margin: 0 50px 50px 50px;

  box-shadow: 1px 1px 6px 1px gray;
`;

export const LedgerInputContainer = styled.div`
  border: none;
  border-radius: 30px;
  background-color: white;
  width: 700px;
  height: 700px;
  margin: 0 50px 50px 50px;
  box-shadow: 1px 1px 6px 1px gray;
  justify-content: center;
`;

export const LedgerInputButton = styled.button`
  position: relative;
  top: 20px;
  left: 2.5%;
  right: 2.5%;
  margin: auto;
  outline: none;
  border-radius: 30px;
  width: 665px;
  height: 50px;
  background-color: lightgray;
  &:hover {
    background-color: gray;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

export const OverlayContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 700px;
  background-color: white;
  z-index: 10000;
  border: none;
  border-radius: 30px;
`;
