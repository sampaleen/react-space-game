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
      },
      delete:true
    }
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.update, 10);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  update() {
    let newY = this.state.laser.top - laserSpeed;
    let x = this.state.laser.left;

    if(newY > 50) {

      newY = this.state.laser.top -  laserSpeed;
      let laser = {
        position:'absolute',
        left:x,
        top: newY
      }
  
      this.setState({
        laser:laser
      });
    
    } else{
      if(this.state.delete) {
        this.props.removeLaser();
        this.setState({delete:false});
      }
    }
    
  }

  remove() {
    // if(this.state.delete) {
    //   
    // }
    // 
  }

  render () {
    return(
      <img src = {Beams} style = {this.state.laser} />
    );
  }
}

export default Laser;
