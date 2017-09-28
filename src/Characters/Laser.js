import React, { Component } from 'react';

import Beams from '../Assets/beams.png';

const laserSpeed = 3;

class Laser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      laser: {
        position:'absolute',
        left:this.props.x,
        top:this.props.y - 60
      } 
    }
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.update, 10);
  }

  update() {
    let newY = this.state.laser.top - laserSpeed;
    let x = this.state.laser.left;
    let laser = {
      position:'absolute',
      left:x,
      top: newY
    }
    this.setState({
      laser:laser
    });
  }

  render () {
    return(
      <img src = {Beams} style = {this.state.laser}/>
    );
  }
}

export default Laser;