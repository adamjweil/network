import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
});
