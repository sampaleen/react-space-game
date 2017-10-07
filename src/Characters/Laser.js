import React, { Component } from 'react';

import Beams from '../Assets/beams.png';

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
      // eslint-disable-next-line
<<<<<<< HEAD
      <img src = {Beams} style = {this.state.laser} onClick={this.remove } />
=======
      <img src = {Beams} style = {this.state.laser} />
>>>>>>> f6bd245348817b0f549e5f8bbc7968b363cca133
    );
  }
}

export default Laser;
