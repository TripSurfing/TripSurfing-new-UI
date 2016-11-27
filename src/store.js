import {createStore, compose} from 'redux';
import rootReducer from './reducers';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Firebase from 'firebase';
import milestoneList from './data/milestoneList';
import tripInfo from './data/tripInfo';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyApKf7HoXV8jUhJUga_4SH7B3VpR8wbTeo",
  authDomain: "tripsurfing-test.firebaseapp.com",
  databaseURL: "https://tripsurfing-test.firebaseio.com",
  storageBucket: "tripsurfing-test.appspot.com",
  messagingSenderId: "5943312989"
};
Firebase.initializeApp(config);

const defaultState = {
  milestoneList, tripInfo
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
