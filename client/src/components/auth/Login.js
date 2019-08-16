import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form className="ui success form">
        <div className="field">
          <label>Email:</label>
          <div className="ui input">
            <input name="email" type="text" placeholder="email" />
          </div>
        </div>
        <div className="field">
          <label>Password:</label>
          <div className="ui input">
            <input name="password" type="password" placeholder="password" />
          </div>
        </div>
        <button className="ui button">Login</button>
      </form>
    </div>
  );
};

export default Login;
