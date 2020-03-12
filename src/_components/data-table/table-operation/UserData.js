import React from "react";
import { Table } from "react-bootstrap";


import { connect } from 'react-redux';
import { userActions } from '../../../_actions/user.actions';

class UserData extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor')
  }

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
  }

  getSnapshotBeforeUpdate() {
     console.log('getSnapshotBeforeUpdate')
  }

  componentDidUpdate() {
     console.log('componentDidUpdate')
  }
  componentDidMount() {
    console.log('this.props',this.props)
     this.props.getAll(); 
    console.log('componentDidMount') 
  }
}



function mapState(state) {
  console.log('UserData state', state)
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  getAll: userActions.getAll 
};
// export default LoginPage;
export default connect(
  mapState,
  actionCreators
)(UserData);

 