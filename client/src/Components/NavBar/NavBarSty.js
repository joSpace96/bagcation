import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 980px;
  padding: 0 20px;
`;

export const NavItem = styled.div`
  margin-right: 0px;
  cursor: pointer;
  color: #333;
  font-weight: 600;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #000;
  }
`;

export const Brand = styled.img`
  width: 100px;
`;

export const Search = styled.input`
  width: 200px;
  margin-right: 20px;
`;
