import React from "react";
import { Table, Spinner } from "react-bootstrap";

import { connect } from "react-redux";
import { userActions } from "../../../_actions/user.actions";
import Search from './SearchData';
class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
    console.log("constructor");
  }

  userList = props => {
    const List = props.data.map((val, key) => {
      return (
        <tr key={val.id}>
          <td>
            <img src={val.avatar} style={{ width: "15%" }} />
          </td>
          <td>{val.email}</td>
          <td>{val.first_name}</td>
          <td>{val.last_name}</td>
        </tr>
      );
    });
    return List;
  };
  render() {
    const userData = this.props.userData.items || [];
    const loading = this.props.userData.loading || false;
    console.log("userData", userData);

    return (
      <> 
      <div className="container">
        <Search />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Profile</th>

              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{userData.total > 0 ? this.userList(userData) : null}</tbody>
        </Table>
      </div>
  </>
    );
  }
  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  //   return false;
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  componentDidMount() {
    this.props.getAll();
    console.log("componentDidMount");
  }
}

// loading, items

function mapState(state) {
  console.log("state from reducer", state);
  return {
    loggingIn: state.authentication,
    userData: state.users
  };
}

const actionCreators = {
  getAll: userActions.getAll
};
// export default LoginPage;
export default connect(
  mapState,
  actionCreators
)(UserData);
