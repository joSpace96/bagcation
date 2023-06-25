import { styled } from "styled-components";

export const ReviewContainer = styled.span`
  max-width: max-content;
  margin: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  border: none;
  background-color: white;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.div`
  font-size: 16px;
  margin: 0;
`;

export const ReviewImg = styled.img`
  width: 350px;
  height: 300px;
  margin-bottom: 10px;
`;

export const ReviewText = styled.div`
  font-size: 14px;
  margin: 0;
`;

export const ReviewMetadata = styled.div`
  display: flex;
  font-size: 12px;
  color: #888;
`;

export const ReviewContent = styled.div``;

export const ReviewHeader = styled.div`
  width: 1200px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  padding: 40px 0;
  font-family: "나눔바른고딕", NanumBarunGothic, "nanum", "돋움", Dotum,
    "맑은고딕", "Malgun Gothic", "굴림", Gulim, Helvetica, sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const NewReview = styled.img`
  width: 50px;
  padding-left: 20px;
  padding-right: 20px;
  height: max-content;
  color: black;
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
`;
