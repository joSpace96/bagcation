import React, { useState, useEffect } from "react";
import {
  EditContentContainer,
  EditContentHeader,
  EditMemoContainer,
  EditSubmitButton,
  SelectedImgContainer,
} from "./EditReviewContentSty";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import axios from "axios";
import apiServer from "./../../api/api";
import { AddPictures } from "./EditReviewSty";
import Review from "./Review";
import { useNavigate } from "react-router-dom";

const DragHandle = SortableHandle(() => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      cursor: "grabbing",
      zIndex: 9998,
    }}
  />
));

const EditReviewContent = ({
  selectedPictures,
  setSelectedPictures,
  hideOverlay,
}) => {
  console.log("리뷰에디터에서 받은 사진: ", selectedPictures);

  const [containerWidth, setContainerWidth] = useState(498);
  const [leftPosition, setLeftPosition] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    increaseContainerWidth();
  }, [selectedPictures]);

  const increaseContainerWidth = () => {
    if (selectedPictures.length < 3) {
      setContainerWidth(500);
      setLeftPosition(0);
    } else if (selectedPictures.length < 4) {
      setContainerWidth(750);
      setLeftPosition(-25);
    } else if (selectedPictures.length < 5) {
      setContainerWidth(1000);
      setLeftPosition(-50);
    } else if (selectedPictures.length < 6) {
      setContainerWidth(1250);
      setLeftPosition(-75);
    } else {
      setContainerWidth(1500);
      setLeftPosition(-100);
    }
  };

  const decreaseContainerWidth = () => {
    setContainerWidth(498);
    setLeftPosition(0);
  };

  const removePicture = (index) => {
    const newSelectedPictures = [...selectedPictures];
    newSelectedPictures.splice(index, 1);
    setSelectedPictures(newSelectedPictures);
  };

  const SortableImg = SortableElement(({ img }) => (
    <div style={{ position: "relative" }}>
      <DragHandle />
      <img
        style={{
          width: "250px",
          height: "200px",
          position: "relative",
          zIndex: 1,
        }}
        src={URL.createObjectURL(img)}
        alt="Selected Picture"
      />
    </div>
  ));

  const SortableImgList = SortableContainer(({ items }) => (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
        width: `${containerWidth}px`,
      }}
    >
      {items.map((img, index) => (
        <div style={{ backgroundColor: "white" }} key={`img-${index}`}>
          <SortableImg index={index} img={img} />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => removePicture(index)}
            className="material-symbols-outlined"
          >
            delete
          </span>
        </div>
      ))}
    </div>
  ));

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newSelectedPictures = [...selectedPictures];
    const [removed] = newSelectedPictures.splice(oldIndex, 1);
    newSelectedPictures.splice(newIndex, 0, removed);
    setSelectedPictures(newSelectedPictures);
  };

  const ReviewData = new FormData();
  selectedPictures.forEach((item) => {
    ReviewData.append("images[]", item);
  });
  ReviewData.append("user_idx", localStorage.getItem("idx"));
  ReviewData.append("title", title);
  ReviewData.append("content", content);
  ReviewData.append(
    "user_nick",
    localStorage.getItem("nick") || localStorage.getItem("kakaonick")
  );
  ReviewData.append("likecount", 0);

  console.log("폼데이터:", ReviewData);

  const handleSubmit = () => {
    axios
      .post(`${apiServer}/review/create`, ReviewData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("리뷰 등록 완료.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <EditContentContainer>
      <form>
        <EditContentHeader>게시글 작성하기</EditContentHeader>
        <SelectedImgContainer
          style={{ position: "relative", left: `${leftPosition}%` }}
        >
          <SortableImgList
            items={selectedPictures}
            onSortEnd={onSortEnd}
            axis="xy"
            useDragHandle
          />
        </SelectedImgContainer>
        <EditMemoContainer>
          <div>
            <span
              style={{ cursor: "pointer" }}
              onClick={decreaseContainerWidth}
              className="material-symbols-outlined"
            >
              width_normal
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={increaseContainerWidth}
              className="material-symbols-outlined"
            >
              width_full
            </span>
          </div>
          <input
            placeholder="제목을 입력해주세요."
            style={{ width: "480px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <div>
            <textarea
              style={{
                width: "480px",
                maxWidth: "480px",
                minWidth: "480px",
                height: "150px",
                maxHeight: "150px",
                minHeight: "30px",
              }}
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력해주세요."
            />
          </div>
        </EditMemoContainer>
        <AddPictures
          onClick={() => {
            handleSubmit();
            hideOverlay();
          }}
        >
          등록하기
        </AddPictures>
      </form>
    </EditContentContainer>
  );
};

export default EditReviewContent;
