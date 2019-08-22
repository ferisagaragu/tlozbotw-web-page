import { Action } from '../interfaces/action.interface';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';
import UserService from '../http/user.service';
import { UserDataModel } from '../models/user-data.model';
import { alert, toast } from '../../shared/swal/swal.shared';

const userService = new UserService();

export function setUserData(payload: any): Action {
  return { type: UserDataReducerEnum.SET_USER_DATA, payload };
}

export function login(email:string, password: string): Function {
  return async (dispatch: Function) => {
    userService.login(email, password, 
      (userData: UserDataModel) => {
        dispatch(setUserData(userData));
        toast('success', `Bienvenid@ ${userData.name}`);
      }, (error: any) => {
        alert('error', 'Upps...', error.message);
      }
    );
  };
}