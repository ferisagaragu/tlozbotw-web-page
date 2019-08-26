import { createStore, applyMiddleware, compose } from 'redux';
import { reducers, initState } from '../declarations/redux.declarations';
import thunk from 'redux-thunk';

import { library } from '@fortawesome/fontawesome-svg-core';
import icons from '../declarations/fontawesome.declarations';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAPCD6Ai9aASF4j36Sagyn8pI6JlZj3fEE",
  authDomain: "tlozbotw-240a7.firebaseapp.com",
  databaseURL: "https://tlozbotw-240a7.firebaseio.com",
  projectId: "tlozbotw-240a7",
  storageBucket: "tlozbotw-240a7.appspot.com",
  messagingSenderId: "299245941226",
  appId: "1:299245941226:web:c9bac6e300e32279"
}

firebase.initializeApp(firebaseConfig);
export default firebase;

//REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initState, composeEnhancers(applyMiddleware(thunk)));

//FONT AWESOME 
library.add(icons);