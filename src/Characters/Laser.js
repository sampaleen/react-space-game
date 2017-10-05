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
<<<<<<< HEAD
      // eslint-disable-next-line
      <img src = {Beams} style = {this.state.laser} onClick={this.remove } />
=======
      <img src = {Beams} style = {this.state.laser} />
>>>>>>> e7571babe37f839be2731a0288d015d0692be27b
    );
  }
}

export default Laser;
