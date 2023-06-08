import { styled } from "styled-components";

export const PlanSearchContainer = styled.div`
  margin-top: 20px;
  height: max-content;
  justify-content: center;
`;
export const SearchBox = styled.div`
  border-radius: 20px;
  background-color: white;
  width: 1200px;
  height: max-content;
  margin: auto;
  margin-top: 30px;
  padding: 1rem;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LeftTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  width: 120px;
  padding: 20px;
  border-right: 1px solid lightgray;
  background-color: transparent;
`;
export const TableHeaderWrapper = styled.tr`
  width: 100%;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
`;

export const TableBody = styled.td`
  text-align: center;
  width: 95px;
  height: 60px;
  background-color: transparent;
  cursor: pointer;
  font-family: "nanum_b";
  font-weight: bold;
  font-size: 15px;
  color: #555555;
  &:hover {
    color: black;
  }
`;

export const TableBodyWrapper = styled.tr`
  flex-direction: row;
`;

export const Subject = styled.div`
  text-align: center;
  font-family: "nanum_b";
  font-weight: bold;
  font-size: 40px;
  color: #555555;
`;
