import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";

// import formReducer from 'react-forms';

export default combineReducers({
  alert,
  auth
});
