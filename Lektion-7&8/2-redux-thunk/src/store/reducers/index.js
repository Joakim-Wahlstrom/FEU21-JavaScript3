import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postsReducer from "./postsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  posts: postsReducer,
  post: postReducer,
  auth: authReducer
})