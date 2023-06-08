import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  justify-content: center;
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
  flex-direction: column;
`;

export const BannerLogo = styled.img`
  justify-content: center;
  border-radius: 15px;
`;

export const BannerSearch = styled.div`
  position: relative;
  margin-top: 30px;
  input {
    border: none;
    width: 550px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    border-radius: 15px;
  }
  button {
    border: none;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 89.5%;
    height: 45px;
    width: 50px;
    font-size: 40px;
    color: gray;

    &:hover {
      color: black;
    }
    .material-symbols-outlined {
      font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    }
  }
`;

export const SearchButton = styled.button``;
