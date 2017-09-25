import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import SpaceShip from '../Characters/SpaceShip';
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
        y:this.state.position.y - speed
      } 
      this.setState({position:position});    
    }
    else if(target.keyCode===39){
      console.log('Right Clicked!!!');    
      let position = {
        x:this.state.position.x + speed,
        y:this.state.position.y
      } 
      this.setState({position:position}); 
    }
    else if(target.keyCode===40){
      console.log('Down Clicked!!!');   
      let position = {
        x:this.state.position.x,
        y:this.state.position.y + speed
      } 
      this.setState({position:position});  
    }
    else if(target.keyCode===37){
      console.log('Left Clicked!!!');
      let position = {
        x:this.state.position.x - speed,
        y:this.state.position.y
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