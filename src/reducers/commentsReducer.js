import { FETCH_COMMENTS, LOADING } from "../actionTypes";

const initialState = {
  data: [],
  isLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENTS:
      return { ...state, data: payload, isLoading: false };
    case LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
