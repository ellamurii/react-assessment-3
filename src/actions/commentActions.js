import jsonPlaceholder from "../api/jsonPlaceholder";
import { FETCH_COMMENTS, LOADING } from "../actionTypes";

export const fetchComments = (postId) => async (dispatch) => {
  dispatch({ type: LOADING });
  const { data } = await jsonPlaceholder.get(`/comments?postId=${postId}`);
  dispatch({ type: FETCH_COMMENTS, payload: data });
};
