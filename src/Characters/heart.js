import React, { Component } from 'react';
import hearts from '../Assets/heart.png';

class heart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heart: {
        position:'absolute',
        left:this.props.x,
        top:this.props.y,
        height: props.height,
        width: props.width
      },
    }
  }


  render () {
    return(
      <img src = {hearts} style = {this.state.heart} />
    );
  }
}

export default heart;
