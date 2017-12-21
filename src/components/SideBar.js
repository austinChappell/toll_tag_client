import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SideBar extends Component {

  render() {

    const mainLink = this.props.user.isAdmin ? <div>
          <NavLink to="/admin" onClick={this.props.toggleSideBar}>
            <h2>Admin</h2>
          </NavLink>
        </div> :
        <div>
          <NavLink to="/dashboard" onClick={this.props.toggleSideBar}>
            <h2>Dashboard</h2>
          </NavLink>
        </div>

    return (
      <div className={this.props.open ? "SideBar open" : "SideBar closed"}>
        {mainLink}
        <div>
          <NavLink to="/settings" onClick={this.props.toggleSideBar}>
            <h2>Settings</h2>
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    user: state.user
  }
}

export default connect(mapStateToProps)(SideBar);
