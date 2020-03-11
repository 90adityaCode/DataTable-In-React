import React from "react";
import "../landing-page/LandingPage.css";
import Header from "../landing-page/Header";
import { userActions } from "../../_actions/user.actions";
import { connect } from "react-redux";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      username: "eve.holt@reqres.in",
      password: "cityslicka",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("submit");
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    console.log("props", this.props);
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    console.log(this.state)
    return (
      <div className="login-box">
        <Header />
        <form className="email-login" onSubmit={this.handleSubmit}>
          <div className="u-form-group">
            <input
              type="text"
              placeholder="user name"
              onChange={this.handleChange}
              name="username"
              value={username}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div className="u-form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="u-form-group">
            <button>Log in</button>
          </div>
          <div className="u-form-group">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    );
  }
}

function mapState(state) {
  console.log("state", state);
  console.log("userAction", userActions.logout);
  const { loggingIn } = state.authentication;
  return { loggingIn };
}
const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};
// export default LoginPage;
export default connect(
  mapState,
  actionCreators
)(LoginPage);
