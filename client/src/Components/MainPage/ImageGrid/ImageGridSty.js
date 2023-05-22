import styled from "styled-components";

export const ImageGridContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;
export const ImageContainerHover = styled.div`
  position: relative;
  cursor: pointer;
`;
export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease-in-out;
  border: none;
  border-radius: 20px;

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
