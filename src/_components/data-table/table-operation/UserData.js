import React from "react";
import { Table, Spinner } from "react-bootstrap";

import { connect } from "react-redux";
import { userActions } from "../../../_actions/user.actions";
import Search from "./SearchData";
class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
    console.log("constructor");
  }
  searchHandle = e => {
    console.log(e);
    console.log(this.props.userData.items);
  };
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
    const userData = this.state.userData.items || [];
    // const loading = this.props.userData.loading || false;
  console.log('render userData',userData);
    return (
      <>
        <div className="container">
          <Search search={this.searchHandle} />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Profile</th>

                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>{userData.length > 0 ? this.userList(userData) : null}</tbody>
          </Table>
        </div>
      </>
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
   console.log('getDerivedStateFromProps ', nextProps);
   if(nextProps.userData.items in prevState.userData){
     console.log('!!!!!!!!!!!!!!!!!!!!!!!',nextProps.userData.items)
     return {
       userData: nextProps.userData.items
     }
   }
    return null;
    // if (nextProps.someValue !== prevState.someValue) {
    //   return { someState: nextProps.someValue };
    // } else return null;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("shouldComponentUpdate");
  //   // console.log("nextProps", nextProps);
  //   // console.log("nextState", nextState);

  //   return false;
  // }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
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
