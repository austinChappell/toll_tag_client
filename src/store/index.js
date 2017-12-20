import { createStore } from 'redux';

let apiURL;

if (process.env.NODE_ENV === 'development') {
  apiURL = 'http://localhost:6001';
} else {
  apiURL = 'somethingelse';
}

const initialState = {
  apiURL: apiURL
}

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
