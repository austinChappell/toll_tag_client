import React, { Component } from 'react';

import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SideBar from './SideBar';
import TextField from 'material-ui/TextField';

class BaseLayout extends Component {

  state = {
    displayDialog: false,
    firstName: '',
    lastName: '',
    lpNum: '',
    loggedIn: true,
    openSideBar: false,
    username: '',
    signingUp: false,
    password: '',
  }

  componentDidMount() {
    console.log('BASELAYOUT COMPONENT UPDATED');
    if (this.state.loggedIn && !this.props.user.active) {
      if (window.location.pathname !== '/payment_details') {
        window.location = '/payment_details';
      }
    }
  }

  handleInputChange = (val, key) => {
    const o = {};
    o[key] = val;
    this.setState(o);
  }

  toggleSideBar = () => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen })
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

    const switchMsg = this.state.signingUp ?
      'Already have an account?' :
      'Need a Toll Tag?';
    const btnTxt = this.state.signingUp ? 'Login' : 'Purchase';

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

    console.log('BASE LAYOUT STATE', this.state);
    console.log('API', this.props.apiURL);

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
          title="NTTA"
          onLeftIconButtonClick={this.toggleSideBar}
          iconStyleLeft={{ display: this.state.loggedIn ? 'inline-block' : 'none' }}
          iconElementRight={<FlatButton label={this.state.loggedIn ? 'Logout' : 'Login'} onClick={this.toggleLogin} />}
        />
        <SideBar open={this.state.sideBarOpen} />

        {this.props.children}

        <Dialog
          title={this.state.signingUp ? 'Buy A Toll Tag' : 'Login'}
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

const mapStateToProps = (state) => {
  return {
    apiURL: state.apiURL,
    user: state.user
  }
}

export default connect(mapStateToProps)(BaseLayout);
