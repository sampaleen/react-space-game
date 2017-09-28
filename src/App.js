import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Controller from './Controller';
import Game from './Game/Game';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Controller/>
          <Game />
      </div>
    );
  }
}

export default App;
