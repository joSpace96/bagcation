import React from "react";

const EditReview = () => {
  return (
    <div className="edit-review-container">
      <div className="edit-review-header">
        <h2 className="edit-review-title">Create a Review</h2>
      </div>
      <div className="edit-review-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content"></textarea>
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default EditReview;
