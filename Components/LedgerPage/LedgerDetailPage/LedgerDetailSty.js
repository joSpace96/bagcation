import { styled } from "styled-components";

export const LedgerDetailContainer = styled.div`
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 30px;
  height: max-content;
  width: auto;
`;

export const LedgerAddContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LedgerAddSubmit = styled.button`
  height: 30px;
  width: 80px;
  position: absolute;
  bottom: 10px;
  right: 214px;
  border: none;
  border-radius: 10px;
  background-color: lightgray;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
export const LedgerLogo = styled.div`
  position: absolute;
  top: 0;
  left: 40%;
  font-size: 40px;
  margin: auto;
  font-family: "Dancing Script", cursive;
`;

export const BillTarget = styled.div``;

export const InputMoney = styled.div``;
