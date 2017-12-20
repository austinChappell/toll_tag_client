import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class NavBar extends Component {

  state = {
    displayDialog: false,
    firstName: '',
    email: '',
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

  getTollTags = (token) => {
    const apiURL = this.props.apiURL;
    fetch(`${apiURL}/user_toll_tag.json?user_token=${token}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    }).then((response) => {
      console.log('RESPONSE', response);
      return response.json();
    }).then((results) => {
      console.log('RESULTS', results);
    }).catch((err) => {
      console.error('GET TOLL TAGS ERROR', err);
    })
  }

  getEvents = (token) => {
    const apiURL = this.props.apiURL;
    console.log('API URL', apiURL);
    fetch(`${apiURL}/toll_events/all_events.json?toll_tag_pin=${token}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    }).then((response) => {
      console.log('RESPONSE', response);
      return response.json();
    }).then((results) => {
      console.log('RESULTS', results);
    }).catch((err) => {
      console.error('GET EVENTS ERROR', err);
    })
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
    const apiURL = this.props.apiURL;
    fetch(`${apiURL}/users/create_user`, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(body)
    }).then((response) => {
      return response.json();
    }).then((results) => {
      console.log('RESULTS', results);
    // this.getTollTags(this.props.token);
    // this.getEvents(this.props.token);
    })
    console.log('BODY', body)
  }

  login = () => {
    const body = {
      username: this.state.username,
      password: this.state.password
    }
    const apiURL = this.props.apiURL;
    // fetch(`${apiURL}/login`, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   mode: 'no-cors',
    //   method: 'POST',
    //   body: JSON.stringify(body)
    // }).then((response) => {
    //   return response.json();
    // }).then((results) => {
    //   console.log('RESULTS', results);
    // this.getTollTags(this.props.token);
    this.getEvents(this.props.token);
    // })
    console.log('BODY', body);
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
      console.log('LOGGING OUT');
      this.logout();
    } else {
      console.log('LOGGING IN');
      this.toggleDialog();
      // this.login();
    }
  }

  toggleSignUpState = () => {
    this.setState({signingUp: !this.state.signingUp});
  }

  render() {

    console.log('NAVBAR STATE', this.state)

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
        onClick={this.submitForm}
      />,
    ];

    return (
      <div className="NavBar">
        <AppBar
          title="NTTA"
          onLeftIconButtonClick={this.toggleSideBar}
          iconStyleLeft={{ display: 'none' }}
          >
            <NavLink to="/dashboard" style={{textDecoration: 'none'}}>
              <h2>Dashboard</h2>
            </NavLink>
            <NavLink to="/settings" style={{textDecoration: 'none'}}>
              <h2>Settings</h2>
            </NavLink>
            <h2 onClick={this.toggleLogin}>{this.props.loggedIn ? 'Logout' : 'Login'}</h2>
          </AppBar>
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
    loggedIn: state.loggedIn,
    token: state.token,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    logout: () => {
      const action = { type: 'LOGOUT' };
      dispatch(action);
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
