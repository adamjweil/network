import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/login" className="item">
          Login
        </Link>
        <Link to="/register" className="item">
          Register
        </Link>
      </div>
    </div>
  );
};

export default connect()(Navbar);
