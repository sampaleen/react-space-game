import React, { Component } from 'react';

import EvilLaser from '../Assets/EvilLaser.png';

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
      // eslint-disable-next-line
      <img src = {EvilLaser} style = {this.state.laser} />
    );
  }
}

export default EvilLasers;
