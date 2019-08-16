import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import GoogleAuth from "../GoogleAuth";

class Navbar extends React.Component {
  render() {
    const { currentUserId } = this.props;

    if (this.props.isSignedIn) {
      return (
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Home
          </Link>
          <div className="right menu">
            <Link to="/register" className="item">
              Register
            </Link>
            <Link to="/login" className="item">
              Login
            </Link>
            <GoogleAuth />
          </div>
        </div>
      );
    } else if (!this.props.isSignedIn) {
      return (
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Home
          </Link>
          <div className="right menu">
            <Link to="##" className="item">
              Login
            </Link>
            <Link to="#" className="item">
              Register
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default connect()(Navbar);
