import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controller from './Controller';
import Game from './Game/Game';
import Menu from './Game/menu';


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
