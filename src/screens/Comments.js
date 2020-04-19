import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions/commentActions";
import CommentCard from "../components/CommentCard";
import Spinner from "../components/Spinner";
import GoBack from "../components/GoBack";

const Comments = (props) => {
  const { postId, fetchComments, comments } = props;
  useEffect(() => {
    fetchComments(postId);
  }, [fetchComments, postId]);

  if (comments.isLoading) {
    return <Spinner />;
  }

  const renderCard = (comment) => {
    return <CommentCard comment={comment} key={comment.id} />;
  };

  return (
    <div className="ui relaxed divided list">
      <GoBack />
      <div className="ui three cards">{comments.data.map(renderCard)}</div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  const comments = state.comments;
  const postId = Number(match.params.postId);
  return { comments, postId };
};

export default connect(mapStateToProps, {
  fetchComments,
})(Comments);
