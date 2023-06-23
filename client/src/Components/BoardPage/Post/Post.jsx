import React, { useEffect, useState } from "react";
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
import axios from "axios";
import apiServer from "../../../api/api";

const Post = () => {
  let [number, setNumber] = useState(0);
  const [images, setImages] = useState([]);
  const [reviewDetail, setReviewDetail] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const url = document.location.href;
  const splitUrl = url.split("/");
  const location = splitUrl[splitUrl.length - 1];
  useEffect(() => {
    try {
      axios
        .get(`${apiServer}/review/get_review?id=${location}`)
        .then((response) => {
          const imageurl = response.data.review.imageUrl;
          setImages(imageurl);
          setReviewDetail(response.data.review);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setPostImg(images[0]);
    if (reviewDetail) {
      setTitle(reviewDetail.title);
      setContent(reviewDetail.content);
    }
  }, [reviewDetail]);
  const [postimg, setPostImg] = useState();

  console.log("이미지들", images[0]);
  console.log("데이터", reviewDetail);
  console.log(title);

  const Increase = () => {
    if (number >= images.length - 1) {
      return setNumber(0), setPostImg(images[0]);
    }

    setNumber(++number);
    setPostImg(images[number]);
  };

  const Decrease = () => {
    if (number <= 0) {
      return (
        setNumber(images.length - 1), setPostImg(images[images.length - 1])
      );
    }
    setNumber(--number);
    setPostImg(images[number]);
  };

  return (
    <>
      <PostContainer>
        <PostContent>
          <TextBox>{title}</TextBox>
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
        <CommentText>
          <CommentBox>{content}</CommentBox>
        </CommentText>
      </PostContainer>
    </>
  );
};

export default Post;
