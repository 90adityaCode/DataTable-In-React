import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DenseTable from "./component/data-table/DataTable";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Container fixed>
        <DenseTable />
      </Container>
    );
  }
}

export default App;
