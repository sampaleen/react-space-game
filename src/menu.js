
import React, { Component } from 'react';
import Overlay from 'react-overlay';
import menu-button from '../Assets/menu-button-hi.png';

 
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      position: props.position,
      x:props.position.x,
      y:props.position.y
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }
 
  render() {
    return (
      <div>
        <Overlay>
          <span>I am attached to the body!</span>
          open={this.state.isOpen}
          onClose={this.toggleMenu}
          <img src = {menu-button}/>
        </Overlay>
      </div>
    );
  }
}
 
export default Menu;