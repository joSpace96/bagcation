import React from "react";
import GoogleIcon from "./Images/free-icon-google-300221.png";
import KakaoIcon from "./Images/kakaotalk_sharing_btn_medium_ov.png";
import NaverIcon from "./Images/btnW_아이콘사각.png";
import Logo from "./Images/Logo.png";
import axios from "axios";

import {
  GoogleLogin,
  InputID,
  InputPW,
  KakaoLogin,
  LoginButton,
  LoginContainer,
  LoginLogo,
  MainLoginContainer,
  NaverLogin,
} from "./LoginSty";
import { Link, useNavigate } from "react-router-dom";
import apiServer from "../../api/api";
import { useState } from "react";

const handleKakaoLogin = () => {
  // 카카오 인가 코드 요청
  window.location.href =
    "https://kauth.kakao.com/oauth/authorize?client_id=c6acf344a39dd6fa0033f505215fd2a3&redirect_uri=http://localhost:3001/kakao-callback&response_type=code";
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    if ((email === "") & (password === "")) {
      return;
    } else {
      try {
        const response = await axios.get(`${apiServer}/user/login`, {
          email,
          password,
        });
        const userData = response.data;
        alert("로그인 성공");
        localStorage.setItem("email", userData.user.email);
        localStorage.setItem("nick", userData.user.nick);

        navigate("/");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <MainLoginContainer>
      <form onSubmit={handleLogin}>
        <LoginContainer>
          <LoginLogo>
            <img src={Logo} alt="Logo" />
          </LoginLogo>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "50px",
            }}
          >
            <InputID
              type="text"
              placeholder="ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputPW
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton type="submit">로그인</LoginButton>
            <Link style={{ margin: "auto" }} to="/register">
              <LoginButton>회원가입</LoginButton>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GoogleLogin>
              <img src={GoogleIcon} alt="Google" />
              <div style={{ margin: "auto" }}>구글로 로그인</div>
            </GoogleLogin>
            <KakaoLogin onClick={handleKakaoLogin}>
              <img src={KakaoIcon} alt="Kakao" />
              <span style={{ margin: "auto" }}>카카오로 로그인</span>
            </KakaoLogin>
            <NaverLogin>
              <img src={NaverIcon} alt="Naver" />
              <div style={{ margin: "auto" }}>네이버로 로그인</div>
            </NaverLogin>
          </div>
        </LoginContainer>
      </form>
    </MainLoginContainer>
  );
};

export default Login;
