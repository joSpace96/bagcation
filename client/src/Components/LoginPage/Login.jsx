import React from "react";
import GoogleIcon from "./Images/free-icon-google-300221.png";
import KakaoIcon from "./Images/kakaotalk_sharing_btn_medium_ov.png";
import NaverIcon from "./Images/btnW_아이콘사각.png";
import Logo from "./Images/Logo.png";

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
  const handleSubmit = async () => {
    try {
      const response = await axios
        .get("http://localhost:5500/naverlogin")
        .then((response) => {});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
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
          <KakaoLogin>
            <img src={KakaoIcon} alt="" />
            <div style={{ margin: "auto" }}>카카오로 로그인</div>
          </KakaoLogin>
          <NaverLogin>
            <img src={NaverIcon} alt="" />
            <div style={{ margin: "auto" }} onClick={handleSubmit}>
              네이버로 로그인
            </div>
          </NaverLogin>
        </div>
      </LoginContainer>
    </MainLoginContainer>
  );
};

export default Login;
