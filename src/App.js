import React, { Component } from 'react';
import './App.css';
import Change from './Change.js';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {password: 123456};
  }
  render() {
    return (
      <div>
      <Change />
      </div>
    );
  }
}

export default App;
