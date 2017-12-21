import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {

  state = {
    email: '',
    firstName: '',
    lastName: '',
    lpNum: '',
    username: '',
    password: '',
  }

  componentDidUpdate() {
    const loggedIn = this.props.loggedIn;
    const isAdmin = this.props.user.isAdmin;
    if (loggedIn && isAdmin) {
      this.props.history.push('/admin');
    } else if (loggedIn && !isAdmin) {
      this.props.history.push('/dashboard');
    }
  }

  handleInputChange = (val, key) => {
    const o = {};
    o[key] = val;
    this.setState(o);
  }

  signup = () => {
    const body = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      lpNum: this.state.lpNum,
      username: this.state.username,
      password: this.state.password
    }
  }


  render() {

    return (
      <div className="Home">
        <div className="overlay"></div>
        <div className="sign-up-form">
          <h2>Purchase a Toll Tag Today!</h2>
          <form>
            <TextField
              floatingLabelText="First Name"
              onChange={(evt) => this.handleInputChange(evt.target.value, 'firstName')}
              value={this.state.firstName}
            /><br />
            <TextField
              floatingLabelText="Last Name"
              onChange={(evt) => this.handleInputChange(evt.target.value, 'lastName')}
              value={this.state.lastName}
            /><br />
            <TextField
              floatingLabelText="Email"
              onChange={(evt) => this.handleInputChange(evt.target.value, 'email')}
              value={this.state.email}
            /><br />
            <TextField
              floatingLabelText="License Plate Number"
              onChange={(evt) => this.handleInputChange(evt.target.value, 'lpNum')}
              value={this.state.lpNum}
            /><br />
            <TextField
              autoComplete="off"
              floatingLabelText="Username"
              onChange={(evt) => this.handleInputChange(evt.target.value, 'username')}
              value={this.state.username}
            /><br />
            <TextField
              floatingLabelText="Password"
              onChange={(evt => this.handleInputChange(evt.target.value, 'password'))}
              type="password"
              value={this.state.password}
            />
            <br />
            <RaisedButton
              label="Purchase Toll Tag"
              onClick={this.signup}
              secondary={true}
              style={{marginTop: '30px'}}
            />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apiURL: state.apiURL,
    loggedIn: state.loggedIn,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(Home));
