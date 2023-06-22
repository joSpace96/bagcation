import React from "react";
import {
  EditContentContainer,
  EditContentHeader,
  EditMemoContainer,
  EditSubmitButton,
  SelectedImgContainer,
} from "./EditReviewContentSty";

const EditReviewContent = () => {
  return (
    <EditContentContainer>
      <EditContentHeader>게시글 작성하기</EditContentHeader>
      <SelectedImgContainer></SelectedImgContainer>
      <EditMemoContainer>
        <EditSubmitButton>완료</EditSubmitButton>
      </EditMemoContainer>
    </EditContentContainer>
  );
};

export default EditReviewContent;
