import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    post: {
      'Content-Type': 'application/json;charset=utf-8',
      'Acess-Controll-Alllow-Origin': "*",
      'Acess-Control-Allow-Headers': "X-Requested-With"
    },
    get: {
      'Content-Type': 'application/json;charset=utf-8',
      'Acess-Controll-Alllow-Origin': "*",
      'Acess-Control-Allow-Headers': "X-Requested-With"
    }
  }
});
