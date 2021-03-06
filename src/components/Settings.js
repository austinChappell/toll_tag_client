import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

class Settings extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: props.user
    }
  }

  handleInputChange = (val, key) => {
    const o = this.state.user;
    o[key] = val;
    this.setState(o);
  }

  render() {

    return (
      <div className="Settings Page">
        <form>
          <TextField
            floatingLabelText="First Name"
            onChange={(evt) => this.handleInputChange(evt.target.value, 'firstName')}
            value={this.state.user.firstName}
          /><br />
          <TextField
            floatingLabelText="Last Name"
            onChange={(evt) => this.handleInputChange(evt.target.value, 'lastName')}
            value={this.state.user.lastName}
          /><br />
          <TextField
            floatingLabelText="Email"
            onChange={(evt) => this.handleInputChange(evt.target.value, 'email')}
            value={this.state.user.email}
          /><br />
        </form>
        <h3>Balance: ${this.state.user.balance}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apiURL: state.apiURL,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(Settings));
