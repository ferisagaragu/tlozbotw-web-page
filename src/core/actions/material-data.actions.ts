import { Action } from '../interfaces/action.interface';
import { alert } from '../../shared/swal/swal.shared';
import { MaterialDataReducerEnum } from '../enums/material-data-reducer.enum';
import MaterialService from '../http/material.service';
import { MaterialModel } from '../models/material.model';

const materialService: MaterialService = new MaterialService();

export function setMaterialData(payload: any): Action {
  return { type: MaterialDataReducerEnum.SET_MATERIAL_DATA, payload };
}

export function getMaterial(id:string): Function {
  return async (dispatch: Function) => {
    materialService.getMaterial(id, 
      (resp: Array<MaterialModel>) => {
        dispatch(setMaterialData(resp));
      }, 
      (error: any) => {
        alert('error', 'Upps...', error.message);
      }
    );
  };
}