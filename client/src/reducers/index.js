import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import alert from "./alert";

export default combineReducers({
  auth: authReducer,
  alert: alert
});
