import React from "react";
import { Link } from "react-router-dom";

import Register from "./../auth/Register";
import Login from "./../auth/Login";

const Landing = () => {
  return (
    <section>
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large"> Dev Connector</h1>
          <p className="content">Create a company profile!</p>
          <div className="buttons">
            <Link exact to="/register" component={Register} />
            <Link exact to="/login" component={Login} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
