import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import SpaceShip from '../Characters/SpaceShip';
import Asteroid from '../Characters/Asteroid';
// eslint-disable-next-line
import Galaxy from '../Assets/galaxy.png';
import Menu from './menu';



const style = {
  Canvas : {
    height:"600px",
    width:"600px",
    backgroundColor:'black'
},
}

const speed = 10;

class Game extends Component {

  constructor() {
    super();
    this.state = {
      position : {
        x:300,
        y:500
      },
      asteroid_pos : {
        x:0,
        y:0
      },
      Up: false,
      Down: false,
      Left: false,
      Right: false
    }
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['up','down','left','right' ], this.onKeyPress, 'keydown');
    Mousetrap.bind(['up','down','left','right' ], this.onKeyUp, 'keyup');
    this.interval = setInterval(this.update, 10);
  }

  update() {

    if(this.state.Up){
      console.log('Up Clicked!!!');
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      }
      if(position.y!==0) {
        position.y = position.y-speed
      }
      this.setState({position:position});
    }
    if(this.state.Right){
      console.log('Right Clicked!!!');
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      }
      if(position.x<540){
        position.x = position.x+speed
      }
      this.setState({position:position});
    }
    if(this.state.Down){
      console.log('Down Clicked!!!');
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      }
      if(position.y<540){
        position.y = position.y+speed
      }
      this.setState({position:position});
    }
    if(this.state.Left){
      console.log('Left Clicked!!!');
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      }
      if(position.x!==0){
        position.x = position.x-speed
      }
      this.setState({position:position});
    }
  }

  onKeyPress(target) {
    if(target.keyCode===38){
      //console.log('Up Clicked!!!');
      this.setState({Up:true});
    }
    if(target.keyCode===39){
      //console.log('Right Clicked!!!');
      this.setState({Right:true});
      //console.log()
    }
    if(target.keyCode===40){
      //console.log('Down Clicked!!!');
      this.setState({Down:true});
    }
    if(target.keyCode===37){
      //console.log('Left Clicked!!!');
      this.setState({Left:true});
    }
  }

  onKeyUp(target) {
    if(target.keyCode===38){
      //console.log('Up Clicked!!!');
      this.setState({Up:false});
    }
    if(target.keyCode===39){
      console.log('Right up!!!');
      this.setState({Right:false});
    }
    if(target.keyCode===40){
      //console.log('Down Clicked!!!');
      this.setState({Down:false});
    }
    if(target.keyCode===37){
      //console.log('Left Clicked!!!');
      this.setState({Left:false});
    }
  }

  render() {
    return(
      <div id = "Canvas" style = {style.Canvas}>
        <SpaceShip position = {this.state.position} />
        <Asteroid position = {this.state.asteroid_pos} />
      </div>
    );
  }
}

export default Game;
