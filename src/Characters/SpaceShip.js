import React, { Component } from 'react';
import update from 'react-addons-update';
import Mousetrap from 'mousetrap';
import SpaceShip_img from '../Assets/spaceship.png';
import Laser from './Laser';
import EvilSpaceShip from './EvilSpaceShip';

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
      EvilSpaceShips:[
        {
          x:400,
          y:100,
          width:100,
          height:70,
          isAlive:true,
        },
        {
          x:200,
          y:100,
          width:100,
          height:70,
          isAlive:true,
        }
      ]
    }
    this.shoot = this.shoot.bind(this);
    this.updateLasers = this.updateLasers.bind(this); 
    this.checkCollisons = this.checkCollisons.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['space'], this.shoot, 'keyup');
    this.Interval = setInterval(this.updateLasers, 10);
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
      y:this.state.spaceShip.top-60 ,
      id:id,
      height:60,
      width:20,
      isAlive:true
    }
    lasers.push(newLaser);
    this.setState({
      lasers:lasers
    }); 
  }

  updateLasers() {
    let lasers = this.state.lasers;
    let temp = [];
    this.checkCollisons();
    lasers.forEach((i) => {
      if(i.y > -100 && i.isAlive){
        i.y -= laserSpeed;
        temp.push(i);
      }
    });
    this.setState({
      lasers:temp
    });
  }

  checkCollisons() {
    let lasers = this.state.lasers;
    let EvilSpaceShips = this.state.EvilSpaceShips;
    let temp = [];
    EvilSpaceShips.forEach((ship) => {
      lasers.forEach((laser) => { 
        if(this.overLap(laser, ship) && ship.isAlive && laser.isAlive) {
          ship.isAlive = false;
          laser.isAlive = false;
          console.log('hit');
        }
      });
    });
  }

  overLap(laser, ship) {
    let l1 = {x: laser.x, y : laser.y};
    let l2 = {x: ship.x, y : ship.y};
    let r1 = {x: laser.x+laser.width, y : laser.y+laser.height};
    let r2 = {x: ship.x+ship.width, y : ship.y+ship.height};
    if (l1.x > r2.x || l2.x > r1.x){
      return false;
    }
    // If one rectangle is above other
    if (l1.y > r2.y || l2.y > r1.y) {
      return false;
    }
    return true;
  }

  render() {
    let lasers = this.state.lasers.map((index)=>{
      if(index.isAlive) {
        return <Laser x = {index.x} y = {index.y} name = {index.id} width = {index.width} height = {index.height}/>;
      }
    });
    let EvilSpaceShips = this.state.EvilSpaceShips.map((index)=>{
      if(index.isAlive){
        return <EvilSpaceShip x = {index.x} y = {index.y} width = {index.width} height = {index.height}/>;
      }
    })
    return(
      <div>
        <img alt = "" src = {SpaceShip_img} style = {this.state.spaceShip}/>
        {lasers}
        {EvilSpaceShips}
      </div>
    );
  }
}

export default SpaceShip;
