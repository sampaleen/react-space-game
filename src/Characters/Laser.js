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
    console.log("begining");
    let newY = this.state.laser.top - laserSpeed;
    let x = this.state.laser.left;

    if(newY < 50) {
      newY = this.state.laser.top +  laserSpeed;
      //this.remove();
      //clearInterval(this.interval);
      //console.log("REmoved");
    }
    let laser = {
      position:'absolute',
      left:x,
      top: newY
    }

    this.setState({
      laser:laser
    });
  }

  remove() {
    clearInterval(this.interval);
    console.log("REmoved");
    this.props.removeLaser();
  }

  render () {
    return(
      // eslint-disable-next-line
      <img src = {Beams} style = {this.state.laser} onClick={this.remove } />
    );
  }
}

export default Laser;
