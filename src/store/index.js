import { createStore } from 'redux';

let apiURL;

if (process.env.NODE_ENV === 'development') {
  apiURL = 'http://localhost:6001';
} else {
  apiURL = 'somethingelse';
}

const initialState = {
  apiURL: apiURL,
  tollTags: [
    {
      id: 1,
      vehicleTag: 1,
      remainingBalance: 37.24,
    },
    {
      id: 2,
      vehicleTag: 2,
      remainingBalance: 29.24
    }
  ],
  events: [
    {
      location: 'DNT Walnut Hill',
      created_at: new Date().toDateString(),
      toll_tag_id: 1,
      charge: 0.40
    },
    {
      location: 'DNT Royal',
      created_at: new Date().toDateString(),
      toll_tag_id: 1,
      charge: 0.40
    },
    {
      location: '121 Prestion',
      created_at: new Date().toDateString(),
      toll_tag_id: 1,
      charge: 0.90
    },
    {
      location: 'DNT Josey',
      created_at: new Date().toDateString(),
      toll_tag_id: 2,
      charge: 0.50
    },
    {
      location: '121 Ohio',
      created_at: new Date().toDateString(),
      toll_tag_id: 2,
      charge: 0.75
    },
  ],
  user: {
    active: true,
    isAdmin: false
  }
}

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
