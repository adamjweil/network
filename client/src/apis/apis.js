import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    post: {
      "Content-Type": "application/json;charset=utf-8"
    }
  }
});
