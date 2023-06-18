import React, { useState } from "react";

const TitleModal = ({ onSubmit, onCancel, startDate }) => {
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    if (!startDate) {
      alert("출발일을 설정해주세요.");
      return;
    }

    onSubmit(title);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "whitesmoke",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "300px",
        zIndex: 9999,
      }}
    >
      <h2 style={{ marginBottom: "16px", textAlign: "center" }}>
        제목을 입력해주세요.
      </h2>
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        style={{
          width: "95%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ddd",
          marginBottom: "16px",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={handleSubmit}
          style={{
            display: "block",
            width: "45%",
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#3897f0",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          확인
        </button>
        <button
          onClick={handleCancel}
          style={{
            display: "block",
            width: "45%",
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "gray",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default TitleModal;
