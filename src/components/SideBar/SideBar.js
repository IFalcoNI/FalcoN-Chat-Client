import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../SideBar/SideBar.css";

// class SideBar extends Component {
//   showSettings(event) {
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <Menu>
//         <h2>Users</h2>
//         <h3>{users}</h3>
//         <Link id="subscribe" className="menu-item" to="/buy">
//           Subscribe
//         </Link>
//       </Menu>
//     );
//   }
// }
const SideBar = ({ users }) => {
  return (
    <Menu>
      <h2>Users</h2>
      <div id="users"></div>
      <Link id="subscribe" className="menu-item" to="/buy">
        Subscribe
      </Link>
    </Menu>
  );
};

export default SideBar;
