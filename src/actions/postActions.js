import jsonPlaceholder from "../api/jsonPlaceholder";
import { FETCH_POSTS, ADD_POST, DELETE_POST, LOADING } from "../actionTypes";

export const fetchPosts = (userId) => async (dispatch) => {
  dispatch({ type: LOADING });
  const { data } = await jsonPlaceholder.get(`/posts?userId=${userId}`);
  dispatch({ type: FETCH_POSTS, payload: data });
};

export const deletePost = (postId) => async (dispatch) => {
  dispatch({ type: LOADING });
  await jsonPlaceholder.delete(`/posts/${postId}`);
  dispatch({ type: DELETE_POST, payload: { id: postId } });
};

export const addPost = (userId, title, body) => async (dispatch) => {
  dispatch({ type: LOADING });
  const { data } = await jsonPlaceholder.post("/posts", {
    userId,
    title,
    body,
  });
  dispatch({ type: ADD_POST, payload: data });
};
