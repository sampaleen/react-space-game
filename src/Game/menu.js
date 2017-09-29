
import React, { Component } from 'react';
import Overlay from 'react-overlay';
import MenuButton from '../Assets/menu-button-hi.png';

 
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
        <Menu position = {this.state.position}>
          <button onClick={this.toggleMenu.bind(this)}>Menu</button>
        </Menu>
        <Overlay>
          <span>I am attached to the body!</span>
          open={this.state.isOpen}
          onClose={this.toggleMenu}
          <img src = {MenuButton}/>
        </Overlay>
      </div>
    );
  }
}
 
export default Menu;