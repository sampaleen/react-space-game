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
      lasers: [],
      deleteIndex:[]
    }
    this.shoot = this.shoot.bind(this);
    this.removeLaser  = this.removeLaser.bind(this);
    this.removeLaserAsync  = this.removeLaserAsync.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['space'], this.shoot);
    this.deleteInterval = setInterval(this.removeLaser, 1000);
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
    lasers.push(id);
    this.setState({
      lasers:lasers
    });
  }

  removeLaserAsync(value) {
    let deleteIndex = this.state.deleteIndex;
    deleteIndex.push(value);
    this.setState({
      deleteIndex:deleteIndex
    });
  }

  removeLaser() {
    
    let deleteIndex = this.state.deleteIndex;
    let lasers = this.state.lasers;
    
    deleteIndex.forEach((i)=>{
      lasers.splice(lasers.indexOf(i), 1);
    });
    
    this.setState({
      lasers:lasers,
      deleteIndex:[]
    });
  }

  render() {
    let lasers = this.state.lasers.map((index)=>(
      <Laser x = {this.state.spaceShip.left} y = {this.state.spaceShip.top} name = {index} removeLaser = {()=>this.removeLaserAsync(index)} />
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
