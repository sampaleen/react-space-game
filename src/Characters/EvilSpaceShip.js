import React, { Component } from 'react';

import Evil_SpaceShip from '../Assets/Meteor.png';

class EvilSpaceShip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EvilSpace : {
        position: 'absolute',
        left:props.x,
        top:props.y,
        height: props.height,
        width: props.width
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      EvilSpace:{
        position:'absolute',  
        left:nextProps.x,
        top:nextProps.y,
        height: nextProps.height,
        width: nextProps.width 
      }
    });
  }


  render() {
    return(
      // eslint-disable-next-line
        <img src = {Evil_SpaceShip}  style = {this.state.EvilSpace} />
    );
  }
}

export default EvilSpaceShip;