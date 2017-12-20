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
    username: '',
    loggedIn: false,
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

  render() {

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
        </Dialog>

      </div>
    )
  }
}

export default BaseLayout;
