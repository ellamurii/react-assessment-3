import { FETCH_POSTS, ADD_POST, DELETE_POST, LOADING } from "../actionTypes";

export default (state = { isLoading: true }, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, data: payload, isLoading: false };
    case ADD_POST:
      const updated = {
        ...state,
        data: [...state.data, payload],
        isLoading: false,
      };
      return updated;
    case DELETE_POST:
      const { id } = payload;
      return {
        ...state,
        data: state.data.filter((post) => post.id !== id),
        isLoading: false,
      };
    case LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
