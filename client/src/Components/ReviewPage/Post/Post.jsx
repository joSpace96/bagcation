import React, { useEffect, useState } from "react";

import {
  PostContents,
  PostImages,
  ReviewComment,
  ReviewCommentInput,
  ReviewContentContainer,
  ReviewMeta,
  ReviewNickContent,
  ReviewPostContainer,
  ReviewPostedUser,
} from "./PostSty";
import axios from "axios";
import apiServer from "../../../api/api";

const Post = () => {
  let [number, setNumber] = useState(0);
  const [images, setImages] = useState([]);
  const [reviewDetail, setReviewDetail] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [nick, setNick] = useState();
  const [likeCount, setLikeCount] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState("");
  const url = document.location.href;
  const splitUrl = url.split("/");
  const location = splitUrl[splitUrl.length - 1];

  const handleLike = () => {
    const likeData = {
      user_id: localStorage.getItem("idx"),
      review_id: location,
    };
    axios
      .post(`${apiServer}/review/review_like`, likeData)
      .then((response) => {
        const data = response.data;
        if (data.message === "Review liked successfully") {
          alert("좋아요가 등록되었습니다.");
          setLikeCount((prevCount) => prevCount + 1); // 좋아요 수 증가
        }
        if (data.message === "Review like removed successfully") {
          alert("좋아요가 해제되었습니다.");
          setLikeCount((prevCount) => prevCount - 1); // 좋아요 수 감소
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const CommentData = {
    user_id: localStorage.getItem("idx"),
    review_id: location,
    comment: comment,
  };

  const handleComment = () => {
    try {
      axios
        .post(`${apiServer}/review/review_comment`, CommentData)
        .then((response) => {
          alert("댓글 등록 성공");
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = (id) => {
    try {
      axios
        .delete(`${apiServer}/review/delete_comment?id=${id}`)
        .then((response) => {
          console.log(response);
          alert("댓글 삭제 완료.");
          window.location.reload();
        });
    } catch (error) {}
  };

  useEffect(() => {
    try {
      axios
        .get(`${apiServer}/review/get_review?id=${location}`)
        .then((response) => {
          const imageurl = response.data.review.imageUrl;
          setImages(imageurl);
          setReviewDetail(response.data.review);
          axios
            .get(`${apiServer}/review/get_review_comment?reviewID=${location}`)
            .then((response) => {
              setCommentData(response.data.Comment);
            });
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
      setNick(reviewDetail.user_nick);
      setLikeCount(reviewDetail.likecount);
    }
  }, [reviewDetail]);

  console.log(commentData);

  const Comment = commentData.map((comments) => ({
    idx: comments.idx,
    comment: comments.comment,
    writer: comments.user.nickname || comments.user.nick,
  }));
  console.log("댓글", Comment);

  const [postimg, setPostImg] = useState();

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
    <ReviewPostContainer>
      <PostImages>
        <span onClick={Decrease} className="material-symbols-outlined">
          chevron_left
        </span>
        <img src={postimg} alt="post-image" />
        <span onClick={Increase} className="material-symbols-outlined">
          chevron_right
        </span>
      </PostImages>
      <PostContents>
        <ReviewPostedUser>{title}</ReviewPostedUser>
        <ReviewContentContainer>
          <ReviewNickContent>
            {nick} &nbsp; &nbsp;
            {content}
            <div>
              {Comment.map((comment) => (
                <ReviewComment>
                  {comment.writer}&nbsp; &nbsp;
                  {comment.comment}
                  {comment.writer === localStorage.getItem("nick") ||
                  localStorage.getItem("kakaonick") ? (
                    <span
                      onClick={() => deleteComment(comment.idx)}
                      style={{ float: "right", cursor: "pointer" }}
                      class="material-symbols-outlined"
                    >
                      close
                    </span>
                  ) : null}
                </ReviewComment>
              ))}
            </div>
          </ReviewNickContent>
          <ReviewMeta>
            <span
              style={{ cursor: "pointer", color: "red" }}
              onClick={handleLike}
              class="material-symbols-outlined"
            >
              favorite
            </span>
            <span style={{ position: "relative", bottom: "2px" }}>
              좋아요&nbsp;{likeCount}&nbsp;개
            </span>
          </ReviewMeta>
        </ReviewContentContainer>
        <ReviewCommentInput
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <span
          style={{
            position: "relative",
            bottom: "37px",
            left: "350px",
            cursor: "pointer",
          }}
          onClick={handleComment}
          class="material-symbols-outlined"
        >
          send
        </span>
      </PostContents>
    </ReviewPostContainer>
  );
};

export default Post;
