import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.commmon["x-auth-token"] = token;
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
