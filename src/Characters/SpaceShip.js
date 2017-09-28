import React, { Component } from 'react';
import SpaceShip_img from '../Assets/spaceship.png';
// eslint-disable-next-line
const style = {
  }



class SpaceShip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaceShip:{
        position : 'absolute',
        height:'60px',
        width:'60px',
        left:props.position.x,
        top:props.position.y
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    let spaceShip = {
      position:'absolute',
      height:'60px%',
      width:'60px%',
      left:nextProps.position.x,
      top:nextProps.position.y
    }
    this.setState(() => ({
      spaceShip:spaceShip
    }));
  }

  render() {
    console.log(this.state.spaceShip);
    return(
      // eslint-disable-next-line
      <img src = {SpaceShip_img} style = {this.state.spaceShip}/>
    );
  }
}

export default SpaceShip;
