import React, { useState } from "react";
import {
  AddPictures,
  EditHeader,
  EditReviewContainer,
  SelectPictures,
} from "./EditReviewSty";


const EditReview = ({ ChangeEditContent }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedPictures, setSelectedPictures] = useState([]);



  const handleNextPicture = () => {
    setCurrentPictureIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevPicture = () => {
    setCurrentPictureIndex((prevIndex) => prevIndex - 1);
  };

  const handleSelectPictures = (e) => {
    setSelectedPictures(Array.from(e.target.files));
  };

  return (
    <EditReviewContainer>
      <EditHeader>새 게시물 만들기</EditHeader>
      <SelectPictures>
        {selectedPictures.length > 0 ? (
          <div>
            <img
              src={URL.createObjectURL(selectedPictures[currentPictureIndex])}
              alt={`사진 ${currentPictureIndex + 1}`}
              style={{
                position: "absolute",
                top: "70px",
                left: "50px",
                maxWidth: "400px",
                maxHeight: "700px",
              }}
            />
            <div style={{ position: "relative", top: "100px", left: "5px" }}>
              <button
                style={{
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                }}
                onClick={handlePrevPicture}
                disabled={currentPictureIndex === 0}
                className={`material-symbols-outlined ${
                  currentPictureIndex === 0 ? "disabled" : ""
                }`}
              >
                arrow_back_ios
              </button>
              <button
                style={{
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                }}
                onClick={handleNextPicture}
                disabled={currentPictureIndex === selectedPictures.length - 1}
                className={`material-symbols-outlined ${
                  currentPictureIndex === selectedPictures.length - 1
                    ? "disabled"
                    : ""
                }`}
              >
                arrow_forward_ios
              </button>
            </div>
          </div>
        ) : (
          <div style={{ position: "relative", top: "-50px" }}>
            <span
              style={{ fontSize: "60px" }}
              className="material-symbols-outlined"
            >
              photo_camera
            </span>
            사진을 등록하세요.
          </div>
        )}
        <br />
        {selectedPictures.length > 0 ? (
          <AddPictures>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => ChangeEditContent()}
            >
              다음
            </div>
          </AddPictures>
        ) : (
          <AddPictures>
            <label htmlFor="picture-upload" style={{ cursor: "pointer" }}>
              선택하기
            </label>
            <input
              id="picture-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleSelectPictures}
              style={{ display: "none" }}
            />
          </AddPictures>
        )}
      </SelectPictures>
    </EditReviewContainer>
  );
};

export default EditReview;
