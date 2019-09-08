import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';
import { userData, statusLogin, notifications } from '../core/reducers/user-data.reducers';
import { bowData } from '../core/reducers/bow-data.reducers';
import { materialData } from '../core/reducers/material-data.reducers';

export const reducers = combineReducers({
  form: reducerForm,
  userData,
  statusLogin,
  notifications,
  bowData,
  materialData
});

export const initState = {
  notifications: [],
  statusLogin: false,
  userData: null,
  bowData: null,
  materialData: null
};