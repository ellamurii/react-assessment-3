import React from 'react';

const CommentCard = ({ comment }) => {
  return (
    <div className="teal card" data-testid="comment-card">
      <div className="content">
        <div className="header" data-testid="card-header">
          {comment.name}
        </div>
        <div className="meta" data-testid="card-meta">
          {comment.email}
        </div>
        <div className="description" data-testid="card-description">
          {comment.body}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
