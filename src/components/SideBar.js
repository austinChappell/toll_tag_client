import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {

  redirect = (path) => {
    window.location = path;
  }

  render() {
    return (
      <div className={this.props.open ? "SideBar open" : "SideBar closed"}>
        <div>
          <NavLink to="/dashboard">
            <h2>Dashboard</h2>
          </NavLink>
        </div>
        <div>
          <NavLink to="/settings">
            <h2>Settings</h2>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default SideBar;
