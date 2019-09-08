import { Action } from '../interfaces/action.interface';
import { MaterialDataReducerEnum } from '../enums/material-data-reducer.enum';

export const materialData = (state = {}, action: Action) => {
  switch(action.type) {
    case MaterialDataReducerEnum.SET_MATERIAL_DATA: return action.payload;
    default: return state;
  }
}