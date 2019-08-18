import { createStore, applyMiddleware, compose } from 'redux';
import { reducers, initState } from '../declarations/redux.declarations';
import thunk from 'redux-thunk';

import { library } from '@fortawesome/fontawesome-svg-core';
import icons from '../declarations/fontawesome.declarations';

//REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initState, composeEnhancers(applyMiddleware(thunk)));

//FONT AWESOME 
library.add(icons);