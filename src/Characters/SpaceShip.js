import React, { Component } from 'react';
import update from 'react-addons-update';
import Mousetrap from 'mousetrap';
import SpaceShip_img from '../Assets/spaceship.png';
import Laser from './Laser';
import EvilSpaceShip from './EvilSpaceShip';
import EvilLasers from './EvilLasers';
import Hearts from './heart.js';
import Score from '../Game/Score';

const laserSpeed = 5;
let EvilSpaceShipSpeed = 1;

let speedUp = false; 

class SpaceShip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaceShip:{
        height:60,
        width:60,
        left:props.position.x,
        top:props.position.y,
        position:'absolute',
        health: 3
      },
      lasers: [],
      evilLaser: [],
      hearts: [],
      EvilSpaceShips:[],
      score:0,
      numOfEnemies: 2,
      rateOfFire: 0.5,
      increaseInt: false
    }
    this.shoot = this.shoot.bind(this);
    this.updateLasers = this.updateLasers.bind(this);
    this.update = this.update.bind(this);
    this.updateEvilSpaceShips = this.updateEvilSpaceShips.bind(this);
    this.checkCollisons = this.checkCollisons.bind(this);
    this.spawnEvilSpaceShip = this.spawnEvilSpaceShip.bind(this);
    this.shootEvilSpaceShip = this.shootEvilSpaceShip.bind(this);
    this.updateEvilLasers = this.updateEvilLasers.bind(this);
    this.spaceShipCheckCollisons = this.spaceShipCheckCollisons.bind(this);
    this.updateHearts = this.updateHearts.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['space'], this.shoot, 'keyup');
    this.Interval = setInterval(this.update, 10);
  }

  componentWillReceiveProps(nextProps) {
    let spaceShip = {
       position:'absolute',
      height:60,
      width:60,
      left:nextProps.position.x,
      top:nextProps.position.y,
      health: this.state.spaceShip.health
    }
    this.setState(() => ({
      spaceShip:spaceShip
    }));
  }

  shoot() {
    if(this.state.spaceShip.health>0){
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
  }

  update() {
    if(this.state.spaceShip.health>0){
      this.checkCollisons();
      this.updateLasers();
      this.updateEvilSpaceShips();
      this.spawnEvilSpaceShip();
      this.updateEvilLasers();
      this.spaceShipCheckCollisons();
      this.updateHearts();
      this.updateIntensity();
      if(this.state.score%15 && this.state.score !==0 && speedUp){
        EvilSpaceShipSpeed++;
        speedUp = false;
        console.log("speeding up");
      }
    }else{
      this.props.endGame();
    }
   }

  updateIntensity() {
    if(this.state.score % 5 === 0 && !this.state.increaseInt) {
      this.state.rateOfFire -= 0.1;
      this.state.numOfEnemies+=1;
      this.state.increaseInt = true;
    } else if(this.state.score % 5 !== 0) {
      this.state.increaseInt = false;
    }
  }

  updateHearts() {
    let hearts = this.state.hearts;
    let health = this.state.spaceShip.health;
    let temp = [];
    let x = 0;
    while (temp.length < health) {
      //console.log(hearts.length);
      let newHeart = {
        postion: 'absolute',
        x: 50*temp.length,
        y:550,
        height:50,
        width:50,
      }
     temp.push(newHeart);
    }
    this.setState({
      hearts:temp
    });
  }

  updateLasers() {
    let lasers = this.state.lasers;
    let temp = [];
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

  spawnEvilSpaceShip() {
    let EvilSpaceShips = this.state.EvilSpaceShips;
    if(EvilSpaceShips.length < this.state.numOfEnemies) {
        EvilSpaceShips.push(
          {
            x:Math.floor((Math.random() * 500) + 50) -40,
            y:Math.floor((Math.random() * 300) + 100) *-1,
            width:100,
            height:70,
            isAlive:true,
          }
        );
    }
  }

  updateEvilSpaceShips() {
    let EvilSpaceShips = this.state.EvilSpaceShips;
    let temp = [];
    EvilSpaceShips.forEach((i) => {
      if(i.y < 530 && i.isAlive){
        i.y += EvilSpaceShipSpeed;
        if(Math.random() > .99 && Math.random() > this.state.rateOfFire) {
          this.shootEvilSpaceShip(i);
        }
        temp.push(i);
      }
    });
    this.setState({
      EvilSpaceShips:temp
    });
  }

  shootEvilSpaceShip(spaceShip) {
    let lasers = this.state.evilLaser;
    //console.log(lasers);
    let newLaser = {
      transform: 'rotate(180deg)',
      position:'absolute',
      x:spaceShip.x,
      y:spaceShip.y+60 ,
      height:60,
      width:20,
      isAlive:true
    }
    lasers.push(newLaser);
    this.setState({
      evilLaser:lasers
    });
  }

  updateEvilLasers() {
    let lasers = this.state.evilLaser;
    let temp = [];
    lasers.forEach((i) => {
      if(i.y < 540 && i.isAlive){
        i.y += laserSpeed;
        temp.push(i);
      }
    });
    this.setState({
      evilLaser:temp
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
          this.state.score = this.state.score + 1;
          if(this.state.score%15===0) {
            speedUp = true;
          }
        }
      });
    });
    //console.log(this.state.score);
  }

  spaceShipCheckCollisons() {
    let evilLasers = this.state.evilLaser;
    let evilSpaceShips = this.state.EvilSpaceShips;
    let spaceShip = {x: this.state.spaceShip.left,
                    y: this.state.spaceShip.top,
                    width: this.state.spaceShip.width,
                    height: this.state.spaceShip.height
                    }
    evilSpaceShips.forEach((eShip) => {
      if(this.overLap(spaceShip, eShip) && eShip.isAlive){
        eShip.isAlive = false;
         let newSpaceShip = {
           height:60,
           width:60,
           left:this.state.spaceShip.left,
           top:this.state.spaceShip.top,
           position:'absolute',
           health: this.state.spaceShip.health- 1
         }
        // console.log("spaceShip hit");
         this.setState({
           spaceShip:newSpaceShip
         });
      }
    });

    evilLasers.forEach((elaser) => {
      if(this.overLap(elaser, spaceShip) && elaser.isAlive){
         elaser.isAlive = false;
         let newSpaceShip = {
           height:60,
           width:60,
           left:this.state.spaceShip.left,
           top:this.state.spaceShip.top,
           position:'absolute',
           health: this.state.spaceShip.health- 1
         }
         this.setState({
           spaceShip:newSpaceShip
         });
      }
    });
    //console.log("Helath: " + this.state.spaceShip.health);
  }

  overLap(laser, ship) {
    let l1 = {x: laser.x, y : laser.y};
    let l2 = {x: ship.x, y : ship.y};
    let r1 = {x: laser.x+laser.width, y : laser.y+laser.height};
    let r2 = {x: ship.x+ship.width, y : ship.y+ship.height};
    //console.log(l1, l2,r1,r2);
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
    let evilLasers = this.state.evilLaser.map((index)=>{
      if(index.isAlive) {
        return <EvilLasers x = {index.x} y = {index.y} name = {index.id} width = {index.width} height = {index.height}/>;
      }
    });
    let EvilSpaceShips = this.state.EvilSpaceShips.map((index)=>{
      if(index.isAlive){
        return <EvilSpaceShip x = {index.x} y = {index.y} width = {index.width} height = {index.height}/>;
      }
    });
    let hearts = this.state.hearts.map((index)=>{
      return <Hearts x = {index.x} y = {index.y} width = {index.width} height = {index.height}/>;
    });
    return(
      <div>
        <img src = {SpaceShip_img} style = {this.state.spaceShip}/>
        {hearts}
        {lasers}
        {EvilSpaceShips}
        {evilLasers}
        <Score score = {this.state.score}/>
      </div>
    );
  }
}

export default SpaceShip;
