import React, { Component } from "react";
import "../SideBar/SideBar.css";
import { slide as Menu } from "react-burger-menu";

class SideBar extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu>
        <h2>Users</h2>
        <a id="subscribe" className="menu-item" href="/buy">
          Subscribe
        </a>
      </Menu>
    );
  }
}

export default SideBar;
