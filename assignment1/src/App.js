import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: "Ha Duy"
  }

  inputChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserInput 
          changed={this.inputChangedHandler}
          userName={this.state.userName} ></UserInput>
      </div>
    );
  }
}

export default App;
