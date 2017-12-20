import React, { Component } from 'react';
import '../index.css';

import BaseLayout from './BaseLayout';
import Home from './Home';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from '../store/';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#070649',
    primary2Color: '#9A6197',
    primary3Color: '#B8B7D5',
    accent1Color: '#9A6197',
    // accent2Color: grey100,
    // accent3Color: grey500,
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
                  <Route path="/" component={Home} />
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
