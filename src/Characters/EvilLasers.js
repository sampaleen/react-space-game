import React, { Component } from 'react';

import Beams from '../Assets/beams.png';

const laserSpeed = 3;

class EvilLasers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      laser: {
        transform: 'rotate(180deg)',
        position:'absolute',
        left:this.props.x,
        top:this.props.y,
        height: props.height,
        width: props.width
      },
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      laser:{
        transform: 'rotate(180deg)',
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

export default EvilLasers;
