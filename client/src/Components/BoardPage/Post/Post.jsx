import React, { useState } from "react";
import Asia from "../../MainPage/ImageGrid/images/Asia.jpg";
import Europe from "../../MainPage/ImageGrid/images/Europe.jpg";
import America from "../../MainPage/ImageGrid/images/America.jpg";
import Oceania from "../../MainPage/ImageGrid/images/Oceania.jpg";
import Africa from "../../MainPage/ImageGrid/images/Africa.jpg";
import {
  Button,
  CommentBox,
  CommentButton,
  CommentIcon,
  CommentText,
  LikeButton,
  LikeIcon,
  PageButtonContainer,
  PageButtons,
  PostContainer,
  PostContent,
  PostFooter,
  PostText,
  TextBox,
} from "./PostSty";

const Post = () => {
  let [number, setNumber] = useState(0);
  const [postimg, setPostImg] = useState(Asia);
  const images = [
    { id: 1, url: Asia },
    { id: 2, url: Europe },
    { id: 3, url: America },
    { id: 4, url: Oceania },
    { id: 5, url: Africa },
  ];
  const Increase = () => {
    if (number >= images.length - 1) {
      return setNumber(0), setPostImg(images[0].url);
    }

    setNumber(++number);
    setPostImg(images[number].url);
  };

  const Decrease = () => {
    if (number <= 0) {
      return (
        setNumber(images.length - 1), setPostImg(images[images.length - 1].url)
      );
    }
    setNumber(--number);
    setPostImg(images[number].url);
  };

  return (
    <>
      <PostContainer>
        <PostContent>
          <img src={postimg} alt="" />
          <div className="buttonContainer">
            <Button className="decrease" onClick={Decrease}>
              <span className="material-symbols-outlined">chevron_left</span>
            </Button>
            <Button className="increase" onClick={Increase}>
              <span className="material-symbols-outlined">chevron_right</span>
            </Button>
          </div>
        </PostContent>
        <PageButtonContainer>
          <PageButtons className="postdecrease">
            <span className="material-symbols-outlined">chevron_left</span>
          </PageButtons>
          <PageButtons className="postincrease">
            <span className="material-symbols-outlined">chevron_right</span>
          </PageButtons>
        </PageButtonContainer>
        <PostFooter>
          <LikeButton liked={true}>
            <LikeIcon>🤍</LikeIcon>
            10
          </LikeButton>
          <CommentButton>
            <CommentIcon>💬</CommentIcon>
          </CommentButton>
        </PostFooter>
        <PostText>
          <TextBox>
            # Asia , Europe , America , Oceania , Africa <br /> <br />
            여행다녀옴
          </TextBox>
        </PostText>
        <CommentText>
          <CommentBox>a : ㅎㅇ?</CommentBox>
        </CommentText>
      </PostContainer>
    </>
  );
};

export default Post;
