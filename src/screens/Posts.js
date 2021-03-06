import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchPosts, deletePost, addPost } from "../actions/postActions";
import { fetchUsers } from "../actions/userActions";
import Header from "../components/Header";
import GoBack from "../components/GoBack";
import PostCard from "../components/PostCard";
import PostCreate from "../components/PostCreate";
import Spinner from "../components/Spinner";

const Posts = (props) => {
  const {
    user,
    userId,
    fetchUsers,
    fetchPosts,
    posts,
    deletePost,
    addPost,
  } = props;

  const history = useHistory();
  const navigateTo = (url) => {
    history.push(url);
  };

  useEffect(() => {
    fetchPosts(userId);
  }, [fetchPosts, userId]);

  if (posts.isLoading) {
    return <Spinner />;
  }

  if (!user) {
    fetchUsers(userId);
    return null;
  }

  const newPost = (post) => {
    addPost(userId, post.title, post.body);
  };

  const renderCard = (post) => {
    return (
      <PostCard
        key={post.id}
        post={post}
        deletePost={deletePost}
        navigateTo={navigateTo}
      />
    );
  };

  return (
    <div className="ui relaxed divided list">
      <GoBack />
      <Header title={user.name + " Posts"} />
      <PostCreate onSubmit={newPost} />
      <div className="ui segment divided items">
        {posts.data.map(renderCard)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts, users }, { match }) => {
  const userId = Number(match.params.userId);
  const user = users.find((user) => user.id === userId);
  return { posts, userId, user };
};

export default connect(mapStateToProps, {
  fetchPosts,
  fetchUsers,
  deletePost,
  addPost,
})(Posts);
