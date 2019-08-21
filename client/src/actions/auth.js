import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load a user

//Register user
export const register = ({
  username,
  email,
  password,
  password2
}) => async dispatch => {};

// Login a User
export const login = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => setAlert(error.msg, "danger"));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
