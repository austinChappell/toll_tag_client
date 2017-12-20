import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';

class BaseLayout extends Component {

  state = {
    displayDialog: false,
    firstName: '',
    lastName: '',
    lpNum: '',
    loggedIn: false,
    username: '',
    signingUp: false,
    password: '',
  }

  handleInputChange = (val, key) => {
    const o = {};
    o[key] = val;
    this.setState(o);
  }

  toggleDialog = () => {
    this.setState({ displayDialog: !this.state.displayDialog });
  }

  toggleLogin = () => {
    if (this.state.loggedIn) {
      console.log('LOGGING OUT');
    } else {
      console.log('LOGGING IN');
      this.toggleDialog();
    }
  }

  toggleSignUpState = () => {
    this.setState({signingUp: !this.state.signingUp});
  }

  render() {

    const switchMsg = this.state.signingUp ? 'Already have an account?' : 'Don\'t have an account?';
    const btnTxt = this.state.signingUp ? 'Login' : 'Sign Up';

    const newAcctDetails = this.state.signingUp ? <div>
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
        floatingLabelText="License Plate Number"
        onChange={(evt) => this.handleInputChange(evt.target.value, 'lpNum')}
        value={this.state.lpNum}
      /><br />
    </div> : null;

    console.log('BASE LAYOUT STATE', this.state)

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.toggleDialog}
      />,
      <FlatButton
        label="Login"
        primary={true}
        keyboardFocused={true}
        onClick={this.login}
      />,
    ];

    return (
      <div className="BaseLayout">
        <AppBar
          title="Title"
          iconElementRight={<FlatButton label={this.state.loggedIn ? 'Logout' : 'Login'} onClick={this.toggleLogin} />}
        />
        {this.props.children}

        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.state.displayDialog}
          onRequestClose={this.toggleDialog}
        >
          {newAcctDetails}
          <TextField
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
          <p>{switchMsg}</p>
          <FlatButton label={btnTxt} onClick={this.toggleSignUpState} />
        </Dialog>

      </div>
    )
  }
}

export default BaseLayout;
