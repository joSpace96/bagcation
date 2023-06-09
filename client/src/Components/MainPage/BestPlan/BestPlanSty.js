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
  margin-bottom: 60px;
`;

export const Title = styled.div`
  margin: auto;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #333333;
  letter-spacing: -1px;
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
  justify-content: left;
  margin: 35px auto;
`;

export const Post = styled.div`
  width: 30%;
  height: max-content;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 200px;
  border: none;
  box-shadow: 0px 1px 1px 0.5px gray;
`;

export const PostContent = styled.div`
  width: 100%;
  height: 78px;
  background-color: white;
  padding: 8px 0;
`;

export const PostTitle = styled.h3`
  margin: 0 15px;
  font-size: 18px;
  color: #242424;
`;

export const PostDescription = styled.p`
  margin: 3px 15px;
  font-size: 10px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  color: #242424;
`;

export const PostDate = styled.p`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 12px 15px;
  font-size: 12px;
  color: #8e8e8e;
`;
