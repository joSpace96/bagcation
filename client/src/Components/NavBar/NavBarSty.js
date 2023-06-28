import styled from "styled-components";

export const NavBarContainer = styled.div`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  white-space: nowrap;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 20%;
  z-index: 1;
`;

export const NavItem = styled.div`
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
  margin-left: 50px;
`;

export const Search = styled.input`
  width: 200px;
  margin-right: 20px;
`;

export const NavProfileMenu = styled.div`
  position: relative;
  left: 150px;
  top: -50px;
  background-color: white;
  border-radius: 20px;
  width: 60%;
  text-align: center;
  font-size: 13px;
`;

export const NavProfileLi = styled.li`
  list-style: none;
  cursor: pointer;
  margin-left: -40px;
  margin-bottom: 5px;
  font-family: "nanum_b";
  font-weight: bold;
  &:hover {
    color: #7bc0f9;
  }
`;
