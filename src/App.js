import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import history from "./_helpers";
// import { alertActions } from '../_actions';
import PrivateRoute from "./_router/PrivateRoute";
import LoginPage from "./_components/login-page/LoginPage";
import RegisterPage from "./_components/register-page/RegisterPage";
import LandingPage from "./_components/landing-page/LandingPage";

import DenseTable from "./_components/data-table/DataTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router >
        <Switch>
          <PrivateRoute exact path="/" component={DenseTable} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />          
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}
export default App; 
