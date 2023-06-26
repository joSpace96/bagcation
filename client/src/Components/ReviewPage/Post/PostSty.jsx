import { styled } from "styled-components";

export const ReviewPostContainer = styled.div`
  /* border: 1px solid red; */
  height: max-content;
  display: flex;
  flex-direction: row;
  margin: 5% auto;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  font-size: 15px; /* 인스타그램 기본 폰트 크기를 설정 (예: 16px) */
`;

export const PostImages = styled.div`
  background-color: white;
  img {
    height: 600px;
    width: 800px;
  }
  span {
    position: relative;
    top: -300px;
    cursor: pointer;
  }
`;

export const PostContents = styled.div`
  border: none;
  background-color: white;
  width: 400px;
  height: 600px;
`;

export const ReviewPostedUser = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px;
`;

export const ReviewTitle = styled.div`
  /* border: 1px solid yellow; */
`;
export const ReviewContentContainer = styled.div`
  border-bottom: 1px solid gray;
  height: 505px;
`;
export const ReviewNickContent = styled.div`
  /* border: 1px solid red; */
  height: 450px;
  background-color: whitesmoke;
  padding: 10px;
  overflow-y: scroll;
`;

export const ReviewComment = styled.div`
  /* border: 1px solid red; */
  background-color: white;
  margin: 10px 0 10px 0;
  padding: 5px 5px 5px 10px;
`;

export const ReviewCommentInput = styled.input`
  border: none;
  height: 50px;
  width: 395px;
`;

export const ReviewMeta = styled.div`
  position: relative;
  bottom: 0;
`;
