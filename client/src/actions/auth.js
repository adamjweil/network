import apis from './../apis/apis';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR } from './types';
import setAuthToken from './../utils/setAuthToken';

// Load a user
export const loadUser = () => async dispatch => {

  const config = { headers: { 'Content-Type': 'application/json' } };

  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await apis.get('/api/auth', config);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.message
    });
  }
}

//Register user
export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
    const body = JSON.stringify({ username, email, password });

      try {
         const res = await apis.post('/api/users', body, config)

        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
        dispatch(loadUser());

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
              payload: err.message
          });
        };
      }
    }

// Login a user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });
  const res = await apis.post('/api/auth', body, config);

    try {
      console.log(res);
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
