import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import Table from './Table';

class Admin extends Component {

  componentDidMount() {
    // if (!this.props.user.isAdmin) {
    //   window.location = '/dashboard';
    // }
  }

  render() {
    return (
      <div className="Admin Page">
        <Table>
          <div className="item header">
            <div className="title">
              First Name
            </div>
            <div className="date">
              Last Name
            </div>
            <div className="charge">
              Balance
            </div>
          </div>
          {this.props.users.map((user, index) => {
            return (
              <div className="item" key={index}>
                <div>
                  {user.firstName}
                </div>
                <div>
                  {user.lastName}
                </div>
                <div>
                  ${user.balance}
                </div>
              </div>
            )
          })}
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users
  }
}

export default withRouter(connect(mapStateToProps)(Admin));
