import React, { Component } from 'react';
import '../index.css';

import Admin from './Admin';
import BaseLayout from './BaseLayout';
import CreditCard from './CreditCard';
import Dashboard from './Dashboard';
import Home from './Home';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Settings from './Settings';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from '../store/';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#ff6f00',
    primary2Color: '#ffa040',
    primary3Color: '#c43e00',
    accent1Color: '#1a237e',
    accent2Color: '#534bae',
    accent3Color: '#000051',
    // textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#070649',
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack,
  },
});

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
              <BaseLayout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/admin" component={Admin} />
                  <Route path="/payment_details" component={CreditCard} />
                  <Route path="/settings" component={Settings} />
                </Switch>
              </BaseLayout>
            </Router>
          </MuiThemeProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
