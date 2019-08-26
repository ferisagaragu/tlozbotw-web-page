import { Action } from '../interfaces/action.interface';
import { BowDataReducerEnum } from '../enums/bow-data-reducer.enum';

export const bowData = (state = {}, action: Action) => {
  switch(action.type) {
    case BowDataReducerEnum.SET_BOW_DATA: return action.payload;
    default: return state;
  }
}