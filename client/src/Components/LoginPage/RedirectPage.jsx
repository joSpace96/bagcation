import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import apiServer from "../../api/api";

const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [localToken, setLocalToken] = useState("");
  const [kakaoId, setKakaoId] = useState("");

  useEffect(() => {
    console.log("RedirectPage rendered");

    const handleKakaoCallback = async () => {
      const code = new URLSearchParams(location.search).get("code");

      if (code) {
        const response = await axios.get(
          `${apiServer}/auth/kakao/token?code=${code}`
        );

        // 토큰 발급 성공 시 수행할 작업
        console.log(response);

        // localToken 상태에 토큰 값을 저장
        setLocalToken(response.data.localToken);
        setKakaoId(response.data.user.kakaoUserId);
        // 쿠키에 토큰과 kakaoId 저장
        localStorage.setItem("idx", response.data.user.idx);
        localStorage.setItem("kakaonick", response.data.user.nickname);
        localStorage.setItem("kakaoprofile", response.data.user.profileImage);
        document.cookie = `localToken=${response.data.localToken}; path=/`;

        // DB에서 kakaoId 조회
        const { data } = await axios.get(
          `${apiServer}/user/find-by-kakao-id?kakaoId=${response.data.user.kakaoUserId}`
        );

        // kakaoId가 DB에 존재하는 경우 홈 화면으로 이동
        if (data) {
          navigate("/");
        }
      }
    };

    handleKakaoCallback();
  }, [location, navigate]);

  return (
    <div>
      Redirecting...
      <br />
      {localToken}
      <br />
      {kakaoId}
    </div>
  );
};

export default RedirectPage;
