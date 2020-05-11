import React, { Component } from 'react';
import * as ReactBS from 'react-bootstrap';

// import styles from './Navbar.module.css';

class Menu extends Component {
  render() {
    return (
      <header>
        <ReactBS.Navbar bg="dark" variant="dark">
          <ReactBS.Navbar.Brand href="#home">
            <img alt="" src="/images/icon_1.png" width="30" height="30" className="d-inline-block align-top" />
            Test
          </ReactBS.Navbar.Brand>
        </ReactBS.Navbar>
      </header>
    );
  }
}
export default Menu;