import { createStore } from 'redux';
import storeConstants from './constants';

let apiURL = 'https://tolltags.localtunnel.me/api';

const initialState = {
  apiURL: apiURL,
  tollTags: [],
  events: [],
  loggedIn: false,
  token: 'D3D02975D337',
  user: {},
  users: []
}

const reducer = (state = initialState, action) => {
  console.log('RUNNING REDUCER', action.type);
  switch(action.type) {
    case storeConstants.LOGIN:
      return Object.assign({}, state, { loggedIn: true });
    case storeConstants.LOGOUT:
      return Object.assign({}, state, { loggedIn: false });
    case storeConstants.SET_EVENTS:
      return Object.assign({}, state, { events: action.events });
    case storeConstants.SET_TOLL_TAGS:
      return Object.assign({}, state, { tollTags: action.tollTags });
    case storeConstants.SET_USER:
      return Object.assign({}, state, { user: action.user })
    case storeConstants.SET_USERS:
      return Object.assign({}, state, { users: action.users })
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
