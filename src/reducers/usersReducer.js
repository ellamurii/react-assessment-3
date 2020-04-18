import { FETCH_USERS } from "../actions/userActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};
