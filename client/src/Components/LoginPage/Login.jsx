import React from "react";
import GoogleIcon from "./Images/free-icon-google-300221.png";
import KakaoIcon from "./Images/kakaotalk_sharing_btn_medium_ov.png";
import NaverIcon from "./Images/btnW_아이콘사각.png";
import Logo from "./Images/Logo.png";
import { useHistory } from "react-router-dom";

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
import axios from "axios";

const Login = () => {
  return (
    <MainLoginContainer>
      <LoginContainer>
        <LoginLogo>
          <img src={Logo} />
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
          <LoginButton>로그인</LoginButton>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <GoogleLogin>
            <img src={GoogleIcon} alt="" />
            <div style={{ margin: "auto" }}>구글로 로그인</div>
          </GoogleLogin>
          <a href="https://kauth.kakao.com/oauth/authorize?client_id=c6acf344a39dd6fa0033f505215fd2a3&redirect_uri=http://localhost:3000/kakao-callback&response_type=code">
            <KakaoLogin>
              <img src={KakaoIcon} alt="" />
              <span style={{ margin: "auto" }}>카카오로 로그인</span>
            </KakaoLogin>
          </a>
          <NaverLogin>
            <img src={NaverIcon} alt="" />
            <div style={{ margin: "auto" }}>네이버로 로그인</div>
          </NaverLogin>
        </div>
      </LoginContainer>
    </MainLoginContainer>
  );
};

export default Login;
