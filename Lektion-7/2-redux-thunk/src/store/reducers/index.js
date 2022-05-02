import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  posts: postsReducer,
  post: postReducer
})