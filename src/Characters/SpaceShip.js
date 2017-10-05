import React, { Component } from 'react';
// eslint-disable-next-line
import update from 'react-addons-update';
import Mousetrap from 'mousetrap';
import SpaceShip_img from '../Assets/spaceship.png';
import Laser from './Laser';
import EvilSpaceShip from './EvilSpaceShip';


const laserSpeed = 5;
let EvilSpaceShipSpeed = 1;

let score = 0;


let speedup = true;
let spawnZone = Math.floor(Math.random()*5);

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
          x:Math.floor(Math.random()*530),
          y:35,
          width:100,
          height:70,
          isAlive:true,
        }
      ]
    }
    this.shoot = this.shoot.bind(this);
    this.updateLasers = this.updateLasers.bind(this);
    this.update = this.update.bind(this); 
    this.updateEvilSpaceShips = this.updateEvilSpaceShips.bind(this);
    this.checkCollisons = this.checkCollisons.bind(this);

  }

  componentDidMount() {
    Mousetrap.bind(['space'], this.shoot, 'keyup');
    this.Interval = setInterval(this.update, 10);
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
      x:this.state.spaceShip.left+20,
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

  update() {
    this.checkCollisons();
    this.updateLasers();
    this.updateEvilSpaceShips();
    if(score%1500===0 && score !== 0 && speedup) {
      EvilSpaceShipSpeed++;
      speedup = false;
    }
  }

  updateLasers() {
    let lasers = this.state.lasers;
    let temp = [];
    lasers.forEach((i) => {
      if(i.y > 30 && i.isAlive){
        i.y -= laserSpeed;
        temp.push(i);
      }
    });
    this.setState({
      lasers:temp
    });
  }

  updateEvilSpaceShips() {
    let EvilSpaceShips = this.state.EvilSpaceShips;
    let temp = [];
    if(Math.floor(Math.random()*100)%50===0) {
          EvilSpaceShips.push({
            x:Math.floor(Math.random()*106)+106*(spawnZone),
            y:35,
            width:100,
            height:70,
            isAlive:true,
          });
        spawnZone = (spawnZone + Math.floor(Math.random()*2)+1)%5;
      }
        
    EvilSpaceShips.forEach((i) => {
      if(i.y < 520 && i.isAlive){
        i.y += EvilSpaceShipSpeed;
        temp.push(i);
      } else if(i.y > 510 && score>0) {
        score -= 100;
      }
    });
    this.setState({
      EvilSpaceShips:temp
    });
  }

  checkCollisons() {
    let lasers = this.state.lasers;
    let EvilSpaceShips = this.state.EvilSpaceShips;
    // eslint-disable-next-line
    let temp = [];
    EvilSpaceShips.forEach((ship) => {
      lasers.forEach((laser) => { 
        if(this.overLap(laser, ship) && ship.isAlive && laser.isAlive) {
          ship.isAlive = false;
          laser.isAlive = false;
          if(!speedup){
            speedup = true;
          }
          score += 100;
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
    // eslint-disable-next-line
    let lasers = this.state.lasers.map((index)=>{
      if(index.isAlive) {
        return <Laser x = {index.x} y = {index.y} name = {index.id} width = {index.width} height = {index.height}/>;
      }
    });
    // eslint-disable-next-line
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
        <div style={{fontSize:40,color:'white'}}>
          <h>Score: </h>
          {score}
        </div>
      </div>
    );
  }
}

export default SpaceShip;
