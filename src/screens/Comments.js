import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { fetchComments } from "../actions/commentActions";
import CommentCard from "../components/CommentCard";
import Spinner from "../components/Spinner";
import GoBack from "../components/GoBack";

const Comments = (props) => {
  const { postId, fetchComments, fetchPosts, comments, post, userId } = props;
  useEffect(() => {
    post && fetchComments(postId);
    !post && fetchPosts(userId);
  }, [fetchComments, postId, fetchPosts, userId, post]);

  if (comments.isLoading) {
    return <Spinner />;
  }

  if (!post) return null;

  const renderCard = (comment) => {
    return <CommentCard comment={comment} key={comment.id} />;
  };

  return (
    <div className="ui relaxed divided list">
      <h3 className="ui horizontal divider header teal">
        Comments for: {post.title}
      </h3>
      <GoBack />
      <div className="ui three cards">{comments.data.map(renderCard)}</div>
    </div>
  );
};

const mapStateToProps = ({ comments, posts }, { match }) => {
  const postId = Number(match.params.postId);
  const userId = Number(match.params.userId);
  const post = posts.data.find((post) => post.id === postId);
  return { comments, postId, post, userId };
};

export default connect(mapStateToProps, {
  fetchComments,
  fetchPosts,
})(Comments);
