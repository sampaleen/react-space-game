import React, { Component } from 'react';

import aAsteroid from '../Assets/asteroid.png';

const asteroid_speed = 3;

class Asteroid extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Asteroid:{
                height:'60px',
                width:'60px',
                left:props.position.x,
                top:props.position.y,
                position:'absolute'
            }
        }
        this.update = this.update.bind(this);
    }
    
    componentDidMount() {
         this.interval = setInterval(this.update, 10);
    }
    
    update() {
    let newY = this.state.Asteroid.top - asteroid_speed;
    let x = this.state.Asteroid.left;
    let Asteroid() = {
      position:'absolute',
      left:x,
      top: newY
    }
    this.setState({
      Asteroid:Asteroid
    });
  }

  render () {
    return(
      // eslint-disable-next-line
      <img src = {aAsteroid} style = {this.state.Asteroid}/>
    );
  }
}

export default Asteroid;