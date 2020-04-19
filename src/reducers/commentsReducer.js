import { FETCH_COMMENTS, LOADING } from "../actionTypes";

export default (state = { isLoading: true }, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENTS:
      return { ...state, data: payload, isLoading: false };
    case LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
