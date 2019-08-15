import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends Reeact {
  render() {
    const { currentUserId } = this.props;

    if (this.props.isSignedIn) {
      return (
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Home
          </Link>
          <div className="right menu">
            <Link to="/api/profile/me" className="item">
              My Profile
            </Link>
            <Link to="/api/profile/me" className="item">
              Sign Out
            </Link>
          </div>
        </div>
    )
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
};

export default connect()(Navbar);
