import React, { Component } from 'react';

class App extends Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <h1> React Seed </h1>
    );
  }
}

export default App;
