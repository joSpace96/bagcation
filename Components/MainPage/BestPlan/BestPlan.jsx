import React from "react";
import {
  BestPlanContainer,
  Header,
  NewPostButton,
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
  Title,
} from "./BestPlanSty";
import { Link } from "react-router-dom";
import Asia from "../ImageGrid/images/Asia.jpg";

const BestPlan = () => {
  return (
    <BestPlanContainer>
      <Header>
        <Title>
          인기 여행일정
          <br />
          <div>다른 여행자들의 일정을 참고해 나만의 여행을 계획해보세요!</div>
        </Title>
      </Header>
      <PostContainer>
        <Post>
          <Link to="/gallery/detail">
            <PostImage src={Asia} />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>게시글 내용</PostDescription>
            <PostDate>2023.05.19</PostDate>
          </PostContent>
        </Post>
        <Post>
          <Link to="/gallery/detail">
            <PostImage src={Asia} />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>게시글 내용</PostDescription>
            <PostDate>2023.05.19</PostDate>
          </PostContent>
        </Post>
        <Post>
          <Link to="/gallery/detail">
            <PostImage src={Asia} />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>게시글 내용</PostDescription>
            <PostDate>2023.05.19</PostDate>
          </PostContent>
        </Post>
        <Post>
          <Link to="/gallery/detail">
            <PostImage src={Asia} />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>게시글 내용</PostDescription>
            <PostDate>2023.05.19</PostDate>
          </PostContent>
        </Post>
        <Post>
          <Link to="/gallery/detail">
            <PostImage src={Asia} />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>게시글 내용</PostDescription>
            <PostDate>2023.05.19</PostDate>
          </PostContent>
        </Post>
        <Post>
          <Link to="/gallery/detail">
            <PostImage src={Asia} />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>게시글 내용</PostDescription>
            <PostDate>2023.05.19</PostDate>
          </PostContent>
        </Post>
      </PostContainer>
    </BestPlanContainer>
  );
};

export default BestPlan;
