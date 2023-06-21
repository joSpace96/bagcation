import { styled } from "styled-components";

export const ReviewContainer = styled.div`
  max-width: 400px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid green;
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
  width: 100%;
  height: auto;
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

export const NewReview = styled.span`
  width: max-content;
  padding-left: 20px;
  padding-right: 20px;
  height: max-content;
  font-size: 20px;
  background-color: orange;
  color: black;
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
`;
