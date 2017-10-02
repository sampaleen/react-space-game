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
        top:this.props.y,
        height: props.height,
        width: props.width
      },
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.y);
    this.setState({
      laser:{
        position:'absolute',  
        left:nextProps.x,
        top:nextProps.y,
        height: nextProps.height,
        width: nextProps.width 
      }
    });
  }


  render () {
    return(
      <img src = {Beams} style = {this.state.laser} />
    );
  }
}

export default Laser;
