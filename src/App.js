import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        App!
      </div>
    );
  }
}

export default App;