import React from "react";
import {
  GuideContainer,
  GuideInput,
  InputPrint,
  SubmitButton,
  TargetPrint,
} from "./GuidPageSty";

const GuidePage = () => {
  return (
    <>
      <GuideContainer>
        <TargetPrint>출력창</TargetPrint>
        <InputPrint>입력창</InputPrint>
        <GuideInput />
        <SubmitButton>확인</SubmitButton>
      </GuideContainer>
    </>
  );
};

export default GuidePage;
