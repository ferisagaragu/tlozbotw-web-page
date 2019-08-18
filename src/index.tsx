import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './imports/react-redux.import';
import { Router } from './imports/react-router-dom.import';

import App from './modules/app';
import * as serviceWorker from './serviceWorker';
import { store } from './config/app.config';

import 'bootstrap/dist/css/bootstrap.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './styles/stylesheet/index.css';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>  
  </Provider>,
document.getElementById('root'));
serviceWorker.unregister();