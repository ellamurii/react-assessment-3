import React from "react";

const PostCard = ({ post, deletePost, navigateTo }) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{post.title}</div>
        <div className="description">
          <p>{post.body}</p>
        </div>
        <div className="ui buttons right floated">
          <button
            className="ui teal button"
            onClick={() => navigateTo(`/post/${post.userId}/${post.id}`)}
          >
            View
          </button>
          <div className="or"></div>
          <button
            className="ui orange button"
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
