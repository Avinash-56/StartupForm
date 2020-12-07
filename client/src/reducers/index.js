import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import startup from "./startup";

export default combineReducers({
  alert,
  auth,
  startup
});
