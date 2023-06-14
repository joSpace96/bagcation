import { styled } from "styled-components";
import { PageButton } from "./PostSty";

export const PostContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  display: block;
  margin: auto;
  height: 600px;
  justify-content: center;
  width: 800px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const PostContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;

  img {
    margin-left: 25%;
    height: 550px;
    width: 50%;
    display: flex;
  }
  .buttonContainer {
    width: 60%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
`;

export const PostFooter = styled.div`
  width: 400px;
  height: max-content;
  margin-left: 200px;
  margin-right: 200px;
  display: flex;
  align-items: center;
`;

export const LikeButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: ${({ liked }) => (liked ? "red" : "inherit")};
`;

export const LikeIcon = styled.span`
  margin-right: 4px;
`;

export const CommentButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
`;

export const CommentIcon = styled.span`
  margin-right: 4px;
`;

export const Button = styled.button`
  width: 8%;
  height: 100%;
  color: lightgray;
  border-radius: 10px;
  background-color: transparent;
  transition: all 0.2s;
  border: none;
  &.increase:hover {
    color: black;
  }
  &.decrease:hover {
    color: black;
  }
`;

export const PageButtonContainer = styled.div`
  position: absolute;
  top: 55%;
  bottom: 45%;
  right: 0;
  left: 0;
  margin: auto;
  justify-content: space-between;
  display: flex;
  span {
    font-size: 70px;
  }
`;

export const PageButtons = styled.button`
  text-align: center;
  width: 10%;
  height: 70px;
  color: lightgray;
  border-radius: 10px;
  background-color: transparent;
  transition: all 0.2s;
  border: none;
  &.postincrease:hover {
    color: black;
  }
  &.postdecrease:hover {
    color: black;
  }
`;

export const PostText = styled.div`
  width: 100%;
  padding: 5px;
  margin-top: 30px;
  margin-left: -7px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;
export const TextBox = styled.div`
  justify-content: center;
  width: 400px;
  margin: 0px 200px 0px 200px;
`;

export const CommentText = styled.div`
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  margin-left: -7px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;
export const CommentBox = styled.div`
  justify-content: center;
  width: 400px;
  margin: 0px 200px 0px 200px;
`;
