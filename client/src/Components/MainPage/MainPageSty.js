import { styled } from "styled-components";

export const MainPageContainer = styled.div``;

export const MainPageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 24px;
    font-weight: bold;
  }

  nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin-left: 15px;
    cursor: pointer;
    color: #333;
  }
`;

export const MainPageSlider = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
`;

export const SlideImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const MainPageSearch = styled.div``;

export const MainPageBest = styled.div``;
