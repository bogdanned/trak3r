import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link, activeItem} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <Menu pointing secondary>
          <Menu.Item name='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Link to='about'>
            <Menu.Item name='about' active={activeItem === 'about'} />
          </Link>

          <Link to='home'>
            <Menu.Item name='home' active={activeItem === 'home'} />
          </Link>

          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
    )
  }
}

export default Navbar;
