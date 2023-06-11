import { styled } from "styled-components";

export const MainLoginContainer = styled.div`
  height: max-content;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;

export const LoginContainer = styled.div`
  margin: auto;
  border-radius: 30px;
  width: 450px;
  height: max-content;
  box-shadow: 0.5px 1px 1px 1px gray;
`;

export const InputID = styled.input`
  border: 1px solid black;
  width: 280px;
  height: 30px;
  margin: auto;
`;
export const InputPW = styled.input`
  border: 1px solid black;
  height: 30px;
  width: 280px;
  margin: auto;
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 10px;
  margin: 10px auto;
`;

export const GoogleLogin = styled.button`
  display: flex;
  padding: 1rem;
  border: 10px;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  margin: 5px auto;
  background-repeat: no-repeat;
  background-size: 100% 50px;
  font-family: "Nanum Gothic", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  img {
    width: 30px;
    position: relative;
    height: 30px;
    top: -5px;
  }
`;

export const KakaoLogin = styled.button`
  display: flex;
  padding: 1rem;
  border: 10px;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  margin: 5px auto;
  background-repeat: no-repeat;
  background-size: 100% 50px;
  font-family: "Nanum Gothic", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  img {
    width: 30px;
    position: relative;
    height: 30px;
    top: -5px;
  }
`;

export const NaverLogin = styled.button`
  display: flex;
  padding: 1rem;
  border: 10px;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  margin: 5px auto;
  background-repeat: no-repeat;
  background-size: 100% 50px;
  font-family: "Nanum Gothic", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  img {
    width: 30px;
    position: relative;
    height: 30px;
    top: -5px;
  }
`;

export const LoginLogo = styled.div`
  position: relative;
  top: 20px;
  left: 28%;
  bottom: 0;
  font-size: 50px;
  margin: auto;
  font-family: "Dancing Script", cursive;
  img {
    width: 200px;
  }
`;
