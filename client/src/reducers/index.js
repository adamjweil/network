import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import alert from "./alert";

// import formReducer from 'react-forms';

export default combineReducers({
  auth: auth,
  alert: alert,
  form: formReducer
});
