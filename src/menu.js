
import React, { Component } from 'react';
import OverlayMenu from 'react-overlay-menu';
import MyMenu from './components/ui/MyMenu';
 
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }
 
  render() {
    return (
      <div>
        <button type="button" onClick={this.toggleMenu}>Open menu</button>
        <OverlayMenu 
          open={this.state.isOpen} 
          onClose={this.toggleMenu}
        >
          <MyMenu />
        </OverlayMenu>
      </div>
    );
  }
}
 
export default Menu;