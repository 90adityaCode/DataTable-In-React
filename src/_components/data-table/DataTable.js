import React from "react";
import UserData from "./table-operation/UserData";
class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <UserData />
      </div>
    );
  }
}

export default DataTable;
