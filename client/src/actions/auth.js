import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, SET_ALERT } from './types';
import setAuthToken from '../utils/setAuthToken';

// Load a user
export const loadUser = (email, password) => async disparch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({ email, password });
    const res = await axios.get('/api/auth', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: res.data
    });
  }
}

//Register user
export const register = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('http://localhost:5000/api/auth', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    const body = JSON.stringify({ email, password });
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {

    const errors = err.response.data.errors;
    errors.forEach(error => setAlert(error.msg, 'danger'));
      if (errors) {
        dispatch({
          type: REGISTER_FAIL,
          payload: res.data
      });
    };
  }
}

export const login = ( email, password ) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

    try {
      const body = JSON.stringify({ email, password });
      const res = await axios.post('/api/auth', body, config);
      console.log(res);
      debugger;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => setAlert(error.msg, 'danger'));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
}
