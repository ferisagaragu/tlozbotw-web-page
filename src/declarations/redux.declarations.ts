import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';
import { userData } from '../core/reducers/user-data.reducers';

export const reducers = combineReducers({
  form: reducerForm,
  userData
});

export const initState = {
  userData: {
    send: false,
    message: '',
    data: null
  }
};