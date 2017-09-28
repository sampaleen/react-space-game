import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import SpaceShip_img from '../Assets/spaceship.png';
import Laser from './Laser'; 


class SpaceShip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaceShip:{
        height:'60px',
        width:'60px',
        left:props.position.x,
        top:props.position.y,
        position:'absolute'
      },
      lasers: []
    }
    this.shoot = this.shoot.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['space'], this.shoot, 'keyup');
  }

  componentWillReceiveProps(nextProps) {
    let spaceShip = {
       position:'absolute',
      height:'60px',
      width:'60px',
      left:nextProps.position.x,
      top:nextProps.position.y
    }
    this.setState(() => ({
      spaceShip:spaceShip
    }));
  }

  shoot() {
    let lasers = this.state.lasers;
    lasers.push(1);
    this.setState({
      lasers:lasers
    }); 
  }

  render() {
    let lasers = this.state.lasers.map((index)=>(
      <Laser x = {this.state.spaceShip.left} y = {this.state.spaceShip.top} />
    ));
    return(
      <div>
        <img alt = "" src = {SpaceShip_img} style = {this.state.spaceShip}/>
        {lasers}
      </div>
    );
  }
}

export default SpaceShip;
