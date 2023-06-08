import React from "react";
import { PopularContainer, PopularList } from "./PopularPostSty";
import Asia from "../../MainPage/ImageGrid/images/Asia.jpg";
import {
  BestPlanContainer,
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
} from "../../PlannerPage/PlannerPost/PopularPostSty";
import { Link } from "react-router-dom";

const PopularPost = () => {
  return (
    <PopularContainer>
      <div style={{ marginLeft: "70px" }}>
        <span style={{ borderRight: "3px solid gray", paddingRight: "1rem" }}>
          인기
        </span>
        <span style={{ paddingLeft: "1rem" }}>신규</span>
      </div>
      <PopularList>
        <BestPlanContainer>
          <PostContainer>
            <Post>
              <Link to="/gallery/detail">
                <PostImage src={Asia} />
              </Link>
              <PostContent>
                <div style={{ padding: "1rem" }}>
                  <PostTitle>게시글 제목</PostTitle>
                  <PostDescription>게시글 내용</PostDescription>
                  <PostDate>2023.05.19</PostDate>
                </div>
              </PostContent>
            </Post>
            <Post>
              <Link to="/gallery/detail">
                <PostImage src={Asia} />
              </Link>

              <PostContent>
                <div style={{ padding: "1rem" }}>
                  <PostTitle>게시글 제목</PostTitle>
                  <PostDescription>게시글 내용</PostDescription>
                  <PostDate>2023.05.19</PostDate>
                </div>
              </PostContent>
            </Post>
            <Post>
              <Link to="/gallery/detail">
                <PostImage src={Asia} />
              </Link>
              <PostContent>
                <div style={{ padding: "1rem" }}>
                  <PostTitle>게시글 제목</PostTitle>
                  <PostDescription>게시글 내용</PostDescription>
                  <PostDate>2023.05.19</PostDate>
                </div>
              </PostContent>
            </Post>
            <Post>
              <Link to="/gallery/detail">
                <PostImage src={Asia} />
              </Link>
              <PostContent>
                <div style={{ padding: "1rem" }}>
                  <PostTitle>게시글 제목</PostTitle>
                  <PostDescription>게시글 내용</PostDescription>
                  <PostDate>2023.05.19</PostDate>
                </div>
              </PostContent>
            </Post>
            <Post>
              <Link to="/gallery/detail">
                <PostImage src={Asia} />
              </Link>
              <PostContent>
                <div style={{ padding: "1rem" }}>
                  <PostTitle>게시글 제목</PostTitle>
                  <PostDescription>게시글 내용</PostDescription>
                  <PostDate>2023.05.19</PostDate>
                </div>
              </PostContent>
            </Post>
            <Post>
              <Link to="/gallery/detail">
                <PostImage src={Asia} />
              </Link>
              <PostContent>
                <div style={{ padding: "1rem" }}>
                  <PostTitle>게시글 제목</PostTitle>
                  <PostDescription>게시글 내용</PostDescription>
                  <PostDate>2023.05.19</PostDate>
                </div>
              </PostContent>
            </Post>
          </PostContainer>
        </BestPlanContainer>
      </PopularList>
    </PopularContainer>
  );
};

export default PopularPost;
