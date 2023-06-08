import { styled } from "styled-components";

export const BestPlanContainer = styled.div`
  width: 85.5%;
  height: max-content;
  padding: 5rem 5rem 5rem 5rem;
  margin: auto;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

export const Title = styled.div`
  margin: auto;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  div {
    color: gray;
    font-size: 20px;
  }
`;

export const PostContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  height: max-content;
  justify-content: center;
  margin: 35px auto;
`;

export const Post = styled.div`
  width: 30%;
  height: max-content;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: -10px;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 200px;
  border: none;
  margin-bottom: 1px;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 0.5px gray;
`;

export const PostContent = styled.div`
  width: 91%;
  height: 78px;
  border: 1px solid #dbdbdb;
  margin-top: 5px;
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0px 1px 1px 0.5px gray;
`;

export const PostTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const PostDescription = styled.p`
  margin: 0;
  margin-top: 3px;
  font-size: 14px;
`;

export const DateLike = styled.div`
  width: 100%;
  display: flex;
`;

export const PostDate = styled.p`
  margin: 0;
  margin-top: 12px;
  font-size: 12px;
  color: #8e8e8e;
`;
