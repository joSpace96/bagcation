import styled, { keyframes } from "styled-components";

const LeftslideIn = keyframes`
  0% {
    transform: translateX(-100%); /* 시작 위치 설정 */
  }
  100% {
    transform: translateX(0); /* 애니메이션 완료 후 위치 설정 */
  }
`;
const RightslideIn = keyframes`
  0% {
    transform: translateX(100%); /* 시작 위치 설정 */
  }
  100% {
    transform: translateX(0%); /* 애니메이션 완료 후 위치 설정 */
  }
`;

export const ParisInfo = styled.div`
  position: relative; /* 자식 요소를 위한 기준으로 사용 */
  width: 90%;
  height: 100%;
  border: 1px solid black;
  margin: auto;
`;
export const ParisContent = styled.div`
  font-family: "Hi Melody";
  border-radius: 20px;
  width: 1000px;
  height: 500px;
  padding: 1rem;
  background-color: ivory;
  position: relative;
  top: -520px;
  left: 130px;
  font-size: 40px;
  transition: filter 1s ease-in-out;
  .animate & {
    animation: ${LeftslideIn} 1.5s ease-in-out;
  }
`;

export const EiffelTower = styled.img`
  width: 500px;
  position: relative;
  top: 500px;
  left: 300px;
  border-radius: 20px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  z-index: 1;
`;

export const LouvreMuseum = styled.img`
  border-radius: 20px;
  position: relative; /* 컨테이너 내에서 위치 조정을 위해 */
  width: 600px;
  top: -800px;
  right: -1000px;
  object-fit: cover; /* 이미지 비율 유지 및 잘림 방지 */
  filter: blur(10px); /* 초기에 흐려진 이미지 설정 */
  transition: filter 1s ease-in-out;

  ${ParisInfo}.animate & {
    filter: blur(0); /* 애니메이션 후 선명한 이미지 설정 */
    animation: ${RightslideIn} 1s ease-in-out;
  }
`;

export const Mont = styled.img`
  border-radius: 20px;
  position: relative; /* 컨테이너 내에서 위치 조정을 위해 */
  width: 500px;
  top: -200px;
  right: -400px;
  object-fit: cover; /* 이미지 비율 유지 및 잘림 방지 */
  filter: blur(10px); /* 초기에 흐려진 이미지 설정 */
  transition: filter 1s ease-in-out;

  ${ParisInfo}.animate & {
    filter: blur(0); /* 애니메이션 후 선명한 이미지 설정 */
    animation: ${RightslideIn} 0.7s ease-in-out;
  }
`;
