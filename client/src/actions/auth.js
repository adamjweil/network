

import setAuthToken from './../utils/setAuthToken';




if(localStorage.token) {
  setAuthToken(localStorage.token);
}


// Load a user
export const loadUser = () => async dispatch => {

  }


//Register user
export const register = () => async dispatch => {


}

// Login a user
export const login = (email, password) => async dispatch => {

}
