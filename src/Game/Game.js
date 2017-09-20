import React, { Component } from 'react';
import SpaceShip from '../Characters/SpaceShip';

const style = {
  Canvas : {
    height:"600px",
    width:"600px"
},
}

class Game extends Component {
  render() {
    return(
      <div id = "Canvas" style = {style.Canvas}>
        <SpaceShip />
      </div>
    );
  }
}

export default Game;