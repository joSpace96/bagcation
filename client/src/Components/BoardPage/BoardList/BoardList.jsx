import React from "react";
import {
  Header,
  ListContainer,
  NewPostButton,
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
  Title,
} from "./BoardListSty";
import { Link } from "react-router-dom";
import Asia from "../../MainPage/ImageGrid/images/Asia.jpg";

const BoardList = () => {
  return (
    <ListContainer>
      <Header>
        <Title>게시글 목록</Title>
        <Link to="/gallery/newpost">
          <NewPostButton>새 게시글</NewPostButton>
        </Link>
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
      </PostContainer>
    </ListContainer>
  );
};

export default BoardList;
