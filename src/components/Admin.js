import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Admin extends Component {

  componentDidMount() {
    if (!this.props.user.isAdmin) {
      window.location = '/dashboard';
    }
  }

  render() {
    return (
      <div className="Admin">
        Admin Component
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(Admin));
