import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SideBar from './SideBar';
import storeConstants from '../store/constants';

import data from '../data/data';

class NavBar extends Component {

  state = {
    displayDialog: false,
    errorMsg: null,
    firstName: '',
    email: '',
    lastName: '',
    lpNum: '',
    openSideBar: false,
    username: '',
    signingUp: false,
    password: '',
  }

  componentDidMount() {

    this.checkLogin();
    this.getUsers();

  }

  componentDidUpdate() {
    this.checkLogin();
  }

  checkLogin() {

    const onIndex = window.location.pathname === '/';

    if (!onIndex) {
      if (!this.props.loggedIn) {
        window.location = '/';
      }
    }

  }

  getTollTags = (user) => {

    const tollTags = data.tollTags.filter(tag => tag.user_id === user.id);
    this.props.setTollTags(tollTags);
    this.getEvents(tollTags);

  }

  getEvents = (tollTags) => {

    const tollTagIds = tollTags.map(tag => tag.id);
    const events = data.events.filter(event => tollTagIds.includes(event.toll_tag_id));
    // console.log('events', events);
    this.props.setEvents(events);

  }

  getUsers() {
    const users = data.users;
    this.props.setUsers(users);
  }

  handleInputChange = (val, key) => {
    const o = {};
    o[key] = val;
    o.errorMsg = null;
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

  login = () => {

    const body = {
      username: this.state.username,
      password: this.state.password
    }

    const users = this.props.users;
    const match = users.filter(user => user.email === body.username && user.password === body.password);

    if (match.length > 0) {

      this.props.setUser(match[0]);
      this.getTollTags(match[0]);
      this.props.login();
      this.toggleDialog();

    } else {
      this.setState({ errorMsg: 'Invalid Credentials' });
    }

  }

  logout = () => {

    this.props.logout();

  }

  submitForm = () => {

    if (this.state.signingUp) {
      this.signup();
    } else {
      this.login();
    }

  }

  toggleSideBar = () => {

    this.setState({ sideBarOpen: !this.state.sideBarOpen })

  }

  toggleDialog = () => {

    this.setState({ displayDialog: !this.state.displayDialog });

  }

  toggleLogin = () => {

    if (this.props.loggedIn) {
      // console.log('LOGGING OUT');
      this.logout();
    } else {
      // console.log('LOGGING IN');
      this.toggleDialog();
      // this.login();
    }

  }

  toggleSignUpState = () => {

    this.setState({signingUp: !this.state.signingUp});

  }

  render() {

    // console.log('NAVBAR STATE', this.state);
    // console.log('NAVBAR PROPS', this.props);

    const switchMsg = this.state.signingUp ?
      'Already have an account?' :
      'Need a Toll Tag?';
    const btnTxt = this.state.signingUp ? 'Login' : 'Purchase';
    const errorMsg = this.state.errorMsg ? <div style={{color: 'red'}}>{this.state.errorMsg}</div> : null;

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
        floatingLabelText="Email"
        onChange={(evt) => this.handleInputChange(evt.target.value, 'email')}
        value={this.state.email}
      /><br />
      <TextField
        floatingLabelText="License Plate Number"
        onChange={(evt) => this.handleInputChange(evt.target.value, 'lpNum')}
        value={this.state.lpNum}
      /><br />
    </div> : null;

    // console.log('BASE LAYOUT STATE', this.state);
    // console.log('API', this.props.apiURL);

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
        onClick={this.submitForm}
      />,
    ];

    return (
      <div className="NavBar">
        <AppBar
          title="NTTA"
          onLeftIconButtonClick={this.toggleSideBar}
          iconStyleLeft={{ display: this.props.loggedIn ? 'inline-block' : 'none' }}
          iconElementRight={<FlatButton label={this.props.loggedIn ? 'Logout' : 'Login'} onClick={this.toggleLogin} />}
        />

        <SideBar open={this.state.sideBarOpen} toggleSideBar={this.toggleSideBar} />
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
          {errorMsg}
        </Dialog>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apiURL: state.apiURL,
    loggedIn: state.loggedIn,
    token: state.token,
    user: state.user,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    login: () => {
      const action = { type: storeConstants.LOGIN };
      dispatch(action);
    },

    logout: () => {
      const action = { type: storeConstants.LOGOUT };
      dispatch(action);
    },

    setEvents: (events) => {
      const action = { type: storeConstants.SET_EVENTS, events };
      dispatch(action);
    },

    setTollTags: (tollTags) => {
      const action = { type: storeConstants.SET_TOLL_TAGS, tollTags };
      dispatch(action);
    },

    setUser: (user) => {
      const action = { type: storeConstants.SET_USER, user };
      dispatch(action);
    },

    setUsers: (users) => {
      const action = { type: storeConstants.SET_USERS, users };
      dispatch(action);
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
