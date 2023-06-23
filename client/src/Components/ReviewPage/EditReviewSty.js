import { styled } from "styled-components";

export const EditReviewContainer = styled.div`
  height: 100%;
`;
export const EditHeader = styled.div`
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
`;

export const SelectPictures = styled.div`
  margin-top: 250px;
  text-align: center;
  font-weight: bold;
`;

export const AddPictures = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  border: none;
  margin: auto;
  width: 150px;
  padding: 10px 0;
  border-radius: 10px;
  background-color: orange;
  font-weight: bold;
  color: white;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #ff5500;
  }
`;
