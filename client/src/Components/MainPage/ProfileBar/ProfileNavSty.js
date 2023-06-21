import { styled } from "styled-components";

export const ProfileBarContainer = styled.div`
  border: none;
  position: relative;
  height: max-content;
  width: 993px;
  margin: 10px auto;
  background-color: white;
  border-radius: 20px;
`;
export const ProfilePicture = styled.img`
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 35px;
`;

export const UserName = styled.div`
  position: absolute;
  padding-left: 10px;
  left: 10%;
  bottom: 65%;
  font-family: "나눔바른고딕", NanumBarunGothic, "nanum", "돋움", Dotum,
    "맑은고딕", "Malgun Gothic", "굴림", Gulim, Helvetica, sans-serif;
  font-weight: bold;
  border: none;
  text-align: center;
`;

export const BagContents = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  text-align: center;
  font-size: 11px;
  font-family: "나눔바른고딕", NanumBarunGothic, "nanum", "돋움", Dotum,
    "맑은고딕", "Malgun Gothic", "굴림", Gulim, Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
`;

export const ContentsName = styled.div`
  border-left: 1px solid lightblue;
  border-right: 1px solid lightblue;
  width: 50px;
  height: 23px;
`;

export const ContentsCounter = styled.div`
  border-left: 1px solid lightblue;
  border-right: 1px solid lightblue;

  padding-top: 5px;
  width: 50px;
`;

export const ContentsIcon1 = styled.div`
  text-align: center;
  position: absolute;
  left: 70%;
  width: 70px;
  height: 90px;
  bottom: 1px;

  span {
    width: 60px;
    height: 60px;
    font-size: 45px;
    margin-top: 2px;
    padding-top: 5px;
    padding-left: 2.5px;
    padding-right: 2.5px;
    border: none;
    border-radius: 32.5px;
    background-color: gray;
    color: white;
    cursor: pointer;
  }
  div {
    margin-top: 5px;
    font-family: "나눔바른고딕", NanumBarunGothic, "nanum", "돋움", Dotum,
      "맑은고딕", "Malgun Gothic", "굴림", Gulim, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 12px;
  }
`;
export const ContentsIcon2 = styled.div`
  text-align: center;
  position: absolute;
  left: 80%;
  width: 70px;
  height: 90px;
  bottom: 1px;
  span {
    width: 60px;
    height: 60px;
    font-size: 45px;
    margin-top: 2px;
    padding-top: 5px;
    padding-left: 2.5px;
    padding-right: 2.5px;
    border: none;
    border-radius: 32.5px;
    background-color: gray;
    color: white;
    cursor: pointer;
  }
  div {
    margin-top: 5px;
    font-size: 12px;
    font-family: "나눔바른고딕", NanumBarunGothic, "nanum", "돋움", Dotum,
      "맑은고딕", "Malgun Gothic", "굴림", Gulim, Helvetica, sans-serif;
    font-weight: bold;
  }
`;
export const ContentsIcon3 = styled.div`
  text-align: center;
  position: absolute;
  left: 90%;
  width: 70px;
  height: 90px;
  bottom: 1px;

  span {
    width: 60px;
    height: 60px;
    font-size: 45px;
    margin-top: 2px;
    padding-top: 5px;
    padding-left: 2.5px;
    padding-right: 2.5px;
    border: none;
    border-radius: 32.5px;
    background-color: gray;
    color: white;
    cursor: pointer;
  }
  div {
    margin-top: 5px;
    font-size: 12px;
    font-family: "나눔바른고딕", NanumBarunGothic, "nanum", "돋움", Dotum,
      "맑은고딕", "Malgun Gothic", "굴림", Gulim, Helvetica, sans-serif;
    font-weight: bold;
  }
`;

export const Icon = styled.div``;
