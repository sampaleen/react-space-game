import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import SpaceShip_img from '../Assets/spaceship.png';

const style = {
  spaceShip:{
    height:'10%',
    width:'10%',
    position: 'absolute',
    bottom:'0',
}}



class SpaceShip extends Component {

  componentDidMount() {
    Mousetrap.bind(['up','down','left','right'], this.onKeyPress);
  }

  onKeyPress(target) {
    if(target.keyCode===38){
      console.log('Up Clicked!!!');    
    }
    else if(target.keyCode===39){
      style.spaceShip.right = toString(parseInt(style.right)+1);
      console.log('Right Clicked!!!');    
      console.log(style.spaceShip.right);
    }
    else if(target.keyCode===40){
      console.log('Down Clicked!!!');    
    }
    else if(target.keyCode===37){
      console.log('Left Clicked!!!');    
    }
  }

  render() {
    return(
      <img src = {SpaceShip_img} style = {style.spaceShip}/>
    );
  }
}

export default SpaceShip;