import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  margin-left: 10%;
  width: 80%;
  height: 400px;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerLogo = styled.img`
  justify-content: center;
`;
