import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  form: reduxFormReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
