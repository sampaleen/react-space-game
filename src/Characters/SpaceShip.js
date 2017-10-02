import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import SpaceShip_img from '../Assets/spaceship.png';
import Laser from './Laser';

const laserSpeed = 5;

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
      lasers: [],
      deleteIndex:[]
    }
    this.shoot = this.shoot.bind(this);
    this.updateLasers = this.updateLasers.bind(this); 
  }

  componentDidMount() {
    Mousetrap.bind(['space'], this.shoot);
    this.deleteInterval = setInterval(this.updateLasers, 10);
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
    let id = Math.random();
    let newLaser = {
      x:this.state.spaceShip.left,
      y:this.state.spaceShip.top,
      id:id
    }
    lasers.push(newLaser);
    this.setState({
      lasers:lasers
    });
    console.log(this.state.lasers);
  }

  updateLasers() {
    let lasers = this.state.lasers;
    let temp = [];
    lasers.forEach((i) => {
      if(i.y > -100){
        i.y -= laserSpeed;
        temp.push(i);
      }
    });
    this.setState({
      lasers:temp
    });
  }


  render() {
    let lasers = this.state.lasers.map((index)=>(
      <Laser x = {index.x} y = {index.y} name = {index.id} removeLaser = {()=>this.removeLaserAsync(index)} />
    ));
    return(
      <div>
        <img src = {SpaceShip_img} style = {this.state.spaceShip}/>
        {lasers}
      </div>
    );
  }
}

export default SpaceShip;
