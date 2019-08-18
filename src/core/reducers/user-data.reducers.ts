import { Action } from '../interfaces/action.interface';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';

export const userData = (state = {}, action: Action) => {
  switch(action.type) {
    case UserDataReducerEnum.SET_USER_DATA: return action.payload;
    default: return state;
  }
}