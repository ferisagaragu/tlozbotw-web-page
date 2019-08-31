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
        alert('error', 'Upps...', error.message);
      }
    );
  };
}

export function createBow(bowData: BowModel): Function {
  return async (dispatch: Function) => {
    bowService.createBow(bowData, 
      (resp: any) => {
        dispatch(setBowData(resp.data));
        alert('success', 'Genial!!!', resp.message);
      }, (error: any) => {
        alert('error', 'Upps...', error.message);
      }
    );
  };
}

export function updateBow(bowData: BowModel): Function {
  return async (dispatch: Function) => {
    bowService.updateBow(bowData, 
      (resp: any) => {
        dispatch(setBowData(resp.data));
        alert('success', 'Genial!!!', resp.message);
      }, (error: any) => {
        alert('error', 'Upps...', error.message);
      }
    );
  };
}

export function deleteBow(bowId: number): Function {
  return async (dispatch: Function) => {
    bowService.deleteBow(bowId, 
      (resp: any) => {
        dispatch(setBowData(resp.data));
        alert('success', 'Genial!!!', resp.message);
      }, (error: any) => {
        alert('error', 'Upps...', error.message);
      }
    );
  };
}