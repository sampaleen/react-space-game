import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import SpaceShip from '../Characters/SpaceShip';
// eslint-disable-next-line
import GameOver from '../Assets/GameOver.png';
import GameMusic from '../Assets/GameMusic.mp3';
import ReactAudioPlayer from 'react-audio-player';



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
      Up: false,
      Down: false,
      Left: false,
      Right: false,
      Game:true,
    }
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.update = this.update.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['up','down','left','right' ], this.onKeyPress, 'keydown');
    Mousetrap.bind(['up','down','left','right' ], this.onKeyUp, 'keyup');
    this.interval = setInterval(this.update, 10);
  }

  update() {

    if(this.state.Up && this.state.Game){
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      }
      if(position.y!==0) {
        position.y = position.y-speed
      }
      this.setState({position:position});
    }
    if(this.state.Right && this.state.Game){
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      }
      if(position.x<540){
        position.x = position.x+speed
      }
      this.setState({position:position});
    }
    if(this.state.Down && this.state.Game){
      let position = {
        x:this.state.position.x,
        y:this.state.position.y
      }
      if(position.y<540){
        position.y = position.y+speed
      }
      this.setState({position:position});
    }
    if(this.state.Left && this.state.Game){
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

  updateGame() {
    this.setState({
      Game:false
    });
  }

  render() {
    return(
      <div id = "Canvas" style = {style.Canvas}>
        <SpaceShip position = {this.state.position} endGame = {()=>this.updateGame()} />
        {!this.state.Game &&
          <img src = {GameOver} />
        }
        <ReactAudioPlayer src = {GameMusic}  autoPlay />
      </div>
    );
  }
}

export default Game;
