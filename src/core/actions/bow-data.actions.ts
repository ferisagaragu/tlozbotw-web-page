import { Action } from '../interfaces/action.interface';
import { BowDataReducerEnum } from '../enums/bow-data-reducer.enum';
import BowService from '../http/bow.service';
import { BowModel } from '../models/bow.model';
import { alert } from '../../shared/swal/swal.shared';

const bowService: BowService = new BowService();

export function setBowData(payload: any): Action {
  return { type: BowDataReducerEnum.SET_BOW_DATA, payload };
}

export function getBows(id:string): Function {
  return async (dispatch: Function) => {
    bowService.getBows(id, 
      (resp: Array<BowModel>) => {
        dispatch(setBowData(resp));
      }, 
      (error: any) => {
        alert('error', 'Upps', error.message);
      }
    );
  };
}