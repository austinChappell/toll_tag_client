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

    // console.log('ADMIN PROPS', this.props)

    return (
      <div className="Admin Page">
        <Table
          titles={['First Name', 'Last Name', 'Balance']}
          keys={['firstName', 'lastName', 'balance']}
          data={this.props.users}
        />
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
