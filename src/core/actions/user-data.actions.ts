import { Action } from '../interfaces/action.interface';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';

export function setUserData(payload: any): Action {
  return { type: UserDataReducerEnum.SET_USER_DATA, payload };
}

export function getBows(userData: any): Function {
  return async (dispatch: Function) => {
    /*bowsService.getBows(userData, (bows: Array<any>) => {
      dispatch(setBows(bows));
    });*/
  };
}