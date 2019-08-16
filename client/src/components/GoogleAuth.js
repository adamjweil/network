import React from "react";
import { connect } from "react-redux";
import { register } from "./../actions/auth";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "678102032586-8jkn4q9341kvbvijklfbf1kdc5n8u2sp.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      // this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      // this.props.signOut();
    }
  };

  onSignOutClick = () => {
    // this.auth.signOut();
  };
  onSignInClick = () => {
    // this.auth.signIn();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <div className="">
          <button className="ui red google button" onClick={this.onSignInClick}>
            <i className="google icon" />
            Sign In With Google!
          </button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { register }
)(GoogleAuth);
