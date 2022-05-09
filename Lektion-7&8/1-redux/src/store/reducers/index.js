import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import quantityReducer from "./quantityRecuder";

export default combineReducers({
  counter: counterReducer,
  quantity: quantityReducer
})