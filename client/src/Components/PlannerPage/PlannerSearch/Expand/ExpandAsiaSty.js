import { styled } from "styled-components";

export const Expend = styled.div`
  border: 1px solid lightgray;
  border-bottom: none;
  width: 100%;
  height: ${({ expand }) => (expand ? "auto" : "0")};
  opacity: ${({ expand }) => (expand ? "1" : "0")};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
  max-height: ${({ expand }) => (expand ? "1000px" : "0")};
`;

export const ExpendIndex = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 1rem 2rem 1rem 2rem;
  span {
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 13px;
    cursor: pointer;
    font-family: "nanum_b";
    font-weight: bold;
    font-size: 16px;
    color: #555555;
    &:hover {
      color: black;
    }
  }
`;

export const ExpendContents = styled.div`
  display: flex;
  padding: 1rem 2rem 1rem 2rem;
  flex-wrap: wrap;
  span {
    color: #555555;
    font-family: "nanum_b";
    font-weight: bold;
    font-size: 13px;
    border: none;
    text-align: center;
    width: 65px;
    padding: 0 1rem 1.5rem 1rem;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

export const ExpendContents2 = styled.div`
  display: flex;
  padding: 1rem 2rem 1rem 2rem;
  flex-wrap: wrap;
  span {
    color: #555555;
    font-family: "nanum_b";
    font-weight: bold;
    font-size: 13px;
    border: none;
    text-align: center;
    width: 110px;
    padding: 0 0.5rem 1.5rem 0.5rem;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
