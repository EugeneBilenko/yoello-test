import { combineReducers } from "redux";
import cart from "./cart";
import drinks from "./drinks";

export default combineReducers({
  drinks,
  cart
});
