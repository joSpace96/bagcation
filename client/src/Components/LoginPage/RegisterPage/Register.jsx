import React, { useState } from "react";
import { Button, Container, Form, Header, Input, Warning } from "./RegisterSty";
import apiServer from "../../../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordOk, setPasswordOk] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [idOk, setIdOk] = useState(false);
  const [profile, setProfile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  const containsSpecialCharacter = (password) => {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharacterRegex.test(password);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Id:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Nickname:", nick);

    if (!isValidEmail(email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!containsSpecialCharacter(password)) {
      alert("비밀번호에는 최소 1개의 특수 문자가 포함되어야 합니다.");
      return;
    }

    if (nick === "admin") {
      alert("사용할 수 없는 아이디입니다.");
      return;
    }

    try {
      const response = await axios.post(`${apiServer}/user/signup`, {
        email,
        password,
        nick,
        profile,
      });
      alert("회원가입 성공");
      navigate("/login");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    setProfile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Header>회원가입</Header>
          <Input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (isValidEmail(e.target.value)) {
                setIdOk(true);
              } else {
                setIdOk(false);
              }
            }}
            required
          />
          {!idOk && <Warning>반드시 이메일 형식이어야 합니다.</Warning>}
          <Input
            type="text"
            placeholder="닉네임"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (containsSpecialCharacter(e.target.value)) {
                setPasswordOk(true);
              } else {
                setPasswordOk(false);
              }
            }}
            required
          />
          {!passwordOk && (
            <Warning>특수문자를 1개 이상 포함해야 합니다.</Warning>
          )}
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label
            style={{
              margin: "auto",
              border: "1px solid black",
              padding: "5px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            htmlFor="profile-input"
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            ) : (
              <span>프로필 사진을 선택하세요</span>
            )}
          </label>
          <Input
            id="profile-input"
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
          />
          <Button type="submit">회원가입</Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
