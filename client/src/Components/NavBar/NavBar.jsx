import React from "react";
import {
  Brand,
  NavBarContainer,
  NavBarWrapper,
  NavItem,
  Search,
} from "./NavBarSty";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LinkButton = styled(Link)`
  margin-right: 30px;
  cursor: pointer;
  color: #333;
  font-weight: 600;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #000;
  }
`;
const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <LinkButton to="/">
          <Brand src="Logo.png" alt="" />
        </LinkButton>
        <Search type="text" />
        <LinkButton to="/gallery">
          <NavItem>게시물</NavItem>
        </LinkButton>
        <LinkButton to="/guide">
          <NavItem>챗봇</NavItem>
        </LinkButton>
        <LinkButton to="/planner">
          <NavItem>플래너</NavItem>
        </LinkButton>
        <LinkButton to="/ledger">
          <NavItem>경비 계산하기</NavItem>
        </LinkButton>
        <NavItem>프로필</NavItem>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
