import { styled } from "styled-components";

export const PopularContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  padding: 5rem;
  padding-top: 2rem;
  height: max-content;
  margin: 0 auto;
  justify-content: center;
`;
export const PopularList = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;

export const BestPlanContainer = styled.div`
  width: max-content;
  height: max-content;
  margin: auto;
`;

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: max-content;
`;

export const Post = styled.div`
  width: 320px;
  height: max-content;
  margin: 10px auto;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 250px;
  border: none;
  margin-bottom: 1px;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 0.5px gray;
`;

export const PostContent = styled.div`
  /* width: 100%; */
  height: max-content;
  border: 1px solid #dbdbdb;
  margin-top: 5px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 1px 1px 0.5px gray;
`;

export const PostTitle = styled.h3`
  margin: 0;
  font-size: 14px;
`;

export const PostDescription = styled.p`
  margin: 0;
  margin-top: 3px;
  font-size: 12px;
`;

export const DateLike = styled.div`
  width: 100%;
  display: flex;
`;

export const PostDate = styled.p`
  margin-top: 2px;
  font-size: 10px;
  color: #8e8e8e;
`;
