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
import NonProfile from "../MainPage/ProfileBar/images/free-icon-profile-4675250.png";
import Logo from "./Logo.png";

const NavBar = () => {
  const nick = localStorage.getItem("nick");
  const kakaonick = localStorage.getItem("kakaonick");
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const profileImage = localStorage.getItem("kakaoprofile") || NonProfile;

  const handleLogout = () => {
    document.cookie =
      "localToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    localStorage.clear();
    alert("로그아웃 성공");
    navigate("/login");
  };

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
        handleLogout();
      },
    },
  ];

  return (
    <NavBarContainer>
      <NavBarWrapper>
        <LinkButton to="/">
          <Brand src={Logo} alt="" />
        </LinkButton>
        <LinkButton to="/planner">
          <NavItem>플래너</NavItem>
        </LinkButton>
        {(nick || kakaonick) != null ? (
          <NavItem onClick={handleLogout}>로그아웃</NavItem>
        ) : (
          <LinkButton to="/login">
            <NavItem>로그인</NavItem>
          </LinkButton>
        )}
      </NavBarWrapper>
      <NavBarWrapper>
        <div>
          <input
            style={{ position: "relative", top: "-10px" }}
            type="text"
            placeholder="도시/장소를 찾아보세요"
          />
          {nick || kakaonick ? (
            <>
              <img
                style={{
                  width: "55px",
                  height: "55px",
                  marginLeft: "10px",
                  position: "relative",
                  top: "1px",
                  padding: "2px",
                  border: "1px solide black",
                  borderRadius: "27.5px",
                }}
                src={profileImage}
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
                  className="material-symbols-outlined"
                >
                  expand_more
                </span>
                {view && (
                  <NavProfileMenu>
                    <ul>
                      {menuItems.map((item, index) => (
                        <NavProfileLi key={index} onClick={item.onClick}>
                          {item.text}
                        </NavProfileLi>
                      ))}
                    </ul>
                  </NavProfileMenu>
                )}
              </ul>
            </>
          ) : null}
        </div>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
