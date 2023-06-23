import React, { useState } from "react";
import EditReview from "./EditReview";
import EditReviewContent from "./EditReviewContent";
import { AddPictures } from "./EditReviewSty";
import { useEffect } from "react";

const ParentsEditor = ({ hideOverlay }) => {
  const [selectedPictures, setSelectedPictures] = useState([]);
  const handleSelectPictures = (e) => {
    setSelectedPictures(Array.from(e.target.files));
  };

  console.log(selectedPictures);
  return (
    <div>
      {selectedPictures.length > 0 ? (
        <EditReviewContent
          hideOverlay={hideOverlay}
          selectedPictures={selectedPictures}
          handleSelectPictures={handleSelectPictures}
          setSelectedPictures={setSelectedPictures}
        />
      ) : (
        <EditReview
          hideOverlay={hideOverlay}
          selectedPictures={selectedPictures}
          handleSelectPictures={handleSelectPictures}
          setSelectedPictures={setSelectedPictures}
        />
      )}
      {selectedPictures.length > 0 ? null : (
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
    </div>
  );
};

export default ParentsEditor;
