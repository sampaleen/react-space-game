import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import SpaceShip from '../Characters/SpaceShip';
// eslint-disable-next-line
import Galaxy from '../Assets/galaxy.png';

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
        y:0
      }
    }
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['up','down','left','right'], this.onKeyPress);
  }
  
  onKeyPress(target) {
    if(target.keyCode===38){
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
    else if(target.keyCode===39){
      console.log('Right Clicked!!!');    
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      } 
      if(position.x<460){
        position.x = position.x+speed
      }
      this.setState({position:position}); 
    }
    else if(target.keyCode===40){
      console.log('Down Clicked!!!');   
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      } 
      if(position.y<530){
        position.y = position.y+speed
      }
      this.setState({position:position});  
    }
    else if(target.keyCode===37){
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

  render() {
    return(
      <div id = "Canvas" style = {style.Canvas}>
        <SpaceShip position = {this.state.position} />
      </div>
    );
  }
}

export default Game;