import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';
import { userData, statusLogin, notifications } from '../core/reducers/user-data.reducers';
import { bowData } from '../core/reducers/bow-data.reducers';

export const reducers = combineReducers({
  form: reducerForm,
  userData,
  statusLogin,
  notifications,
  bowData
});

export const initState = {
  notifications: []
  statusLogin: false,
  userData: null,
  bowData: null
};