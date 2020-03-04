import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "./_helpers";
// import { alertActions } from '../_actions';
import { PrivateRoute } from "./_router/PrivateRoute";
import { LoginPage } from "./_components/login-page/LoginPage";
import { RegisterPage } from "./_components/register-page/RegisterPage";
import {LandingPage} from './_components/landing-page/LandingPage';

import DenseTable from "./_components/data-table/DataTable";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
             
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={DenseTable} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path='/' component={LandingPage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  
};

const connectedApp = connect(
  mapState,
  actionCreators
)(App);
export { connectedApp as App };
