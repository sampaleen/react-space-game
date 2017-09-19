import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Controller extends Component {
  constructor() {
    super();
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['up','down','left','right'], this.onKeyPress);
  }

  onKeyPress(target) {
    if(target.keyCode===38){
      console.log('Up Clicked!!!');    
    }
    else if(target.keyCode===39){
      console.log('Right Clicked!!!');    
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
      <div />
    );
  }
}

export default Controller;