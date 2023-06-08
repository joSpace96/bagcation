import React, { useState } from "react";
import {
  Brand,
  NavBarContainer,
  NavBarWrapper,
  NavItem,
  NavProfileLi,
  NavProfileMenu,
} from "./NavBarSty";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Profile from "../MainPage/ProfileBar/images/free-icon-profile-4675250.png";

const navigate = useNavigate;

const LinkButton = styled(Link)`
  margin-right: 20px;
  margin-left: 20px;
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
const menuItems = [
  {
    text: "클립보드",
    onClick: () => {
      navigate("/notice");
    },
  },
  {
    text: "여행일정",
    onClick: () => {
      navigate("/best");
    },
  },
  {
    text: "리뷰",
    onClick: () => {
      navigate("/q&a");
    },
  },
  {
    text: "여행TIP",
    onClick: () => {
      navigate("/ai");
    },
  },
  {
    text: "Q&A",
    onClick: () => {
      navigate("/ai");
    },
  },
  {
    text: "설정",
    onClick: () => {
      navigate("/ai");
    },
  },
  {
    text: "로그아웃",
    onClick: () => {
      navigate("/ai");
    },
  },
];
const NavBar = () => {
  const [view, setView] = useState(false);
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <LinkButton to="/">
          <Brand src="Logo.png" alt="" />
        </LinkButton>
        <LinkButton to="/planner">
          <NavItem>플래너</NavItem>
        </LinkButton>
        <NavItem>프로필</NavItem>
        <LinkButton to="/login">
          <NavItem>로그인</NavItem>
        </LinkButton>
      </NavBarWrapper>
      <NavBarWrapper>
        <div>
          <input
            style={{ position: "relative", top: "-10px" }}
            type="text"
            placeholder="도시/장소를 찾아보세요"
          />
          <img
            style={{
              width: "50px",
              marginLeft: "10px",
              position: "relative",
              top: "5px",
            }}
            src={Profile}
          />
          <ul
            onClick={() => {
              setView(!view);
            }}
          >
            <span
              style={{
                position: "relative",
                top: "-50px",
                left: "200px",
                cursor: "pointer",
              }}
              class="material-symbols-outlined"
            >
              expand_more
            </span>
            {view && (
              <>
                <NavProfileMenu>
                  <ul>
                    {menuItems.map((item, index) => {
                      return (
                        <NavProfileLi key={index} onClick={item.onClick}>
                          {item.text}
                        </NavProfileLi>
                      );
                    })}
                  </ul>
                </NavProfileMenu>
              </>
            )}
          </ul>
        </div>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
