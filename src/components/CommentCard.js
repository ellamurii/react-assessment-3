import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="teal card">
      <div className="content">
        <div className="header">{comment.name}</div>
        <div className="meta">{comment.email}</div>
        <div className="description">{comment.body}</div>
      </div>
    </div>
  );
};

export default CommentCard;
