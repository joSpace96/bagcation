import styled from "styled-components";

export const ImageGridContainer = styled.div`
  width: 95%;
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
  gap: 10px;
  justify-content: center;
  white-space: nowrap;
`;
export const ImageContainerHover = styled.div`
  position: relative;
  width: 300px;
  cursor: pointer;
  display: inline-block;
`;
export const ImageItem = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  transition: filter 0.3s ease-in-out;
  border: none;
  border-radius: 20px;
  display: inline-block;
  ${ImageContainerHover}:hover & {
    filter: blur(4px); /* 흐려지는 효과 적용 */
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  opacity: ${({ showText }) => (showText ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const GridSubject = styled.div`
  background-color: transparent;
  width: 100%;
  justify-content: center;
  margin: auto;
  margin-top: 60px;
  text-align: center;
  position: relative;
  font-size: 30px;
  font-weight: bold;
  div {
    font-weight: bold;
  }
`;
