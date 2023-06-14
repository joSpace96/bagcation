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
import { Link } from "react-router-dom";

const handleKakaoLogin = () => {
  // 카카오 인가 코드 요청
  window.location.href =
    "https://kauth.kakao.com/oauth/authorize?client_id=c6acf344a39dd6fa0033f505215fd2a3&redirect_uri=http://localhost:3000/kakao-callback&response_type=code";
};

const Login = () => {
  const handleLogin = () => {
    // 로그인 버튼 클릭 시 수행할 작업
    // ...
  };

  return (
    <MainLoginContainer>
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
          <InputID type="text" placeholder="ID" />
          <InputPW type="password" placeholder="Password" />
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
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
    </MainLoginContainer>
  );
};

export default Login;
