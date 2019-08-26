import { Action } from '../interfaces/action.interface';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';
import UserService from '../http/user.service';
import { UserDataModel } from '../models/user-data.model';
import { alert, toast } from '../../shared/swal/swal.shared';
import Firebase from '../../shared/firebase/firebase.shared';
import { NotificationModel } from '../models/notification.model';

const userService = new UserService();
const firebase = new Firebase();

export function setUserData(payload: any): Action {
  if(!payload) {
    toast('info', 'Cerraste sesión cerrada');
  }
  return { type: UserDataReducerEnum.SET_USER_DATA, payload };
}

export function setLoginStatus(payload: any): Action {
  return { type: UserDataReducerEnum.SET_STATUS_LOGIN, payload };
}

export function setNotifications(payload: any): Action {
  return { type: UserDataReducerEnum.SET_NOTIFICATIONS, payload };
}

export function login(email:string, password: string): Function {
  return async (dispatch: Function) => {
    dispatch(setLoginStatus(true));
    userService.login(email, password, 
      (userData: UserDataModel) => {
        dispatch(setLoginStatus(false));
        dispatch(setUserData(userData));
        toast('success', `Bienvenid@ ${userData.name}`);
      }, (error: any) => {
        dispatch(setLoginStatus(false));
        alert('error', 'Upps...', error.message);
      }
    );
  }
}

export function registerUser(userRegist: any) {
  return async (dispatch: Function) => {
    dispatch(setLoginStatus(true));
    userService.registerUser(userRegist,
      (userData: UserDataModel, message: string) => {
        dispatch(setLoginStatus(false));
        dispatch(setUserData(userData));
        alert('success', 'Genial!!', message);
        dispatch(createNotification(new NotificationModel({
          id: userData.uid,
          icon: 'info',
          title: 'Bienvenid@ a tu guia personal de TLOZBOTW',
          message: 'Te invitamos a que heches un vistaso a ' +
                   'los diferentes listados que ofrece ' + 
                   'nuestra guia personalizada'
        })));
      }, (error: any) => {
        dispatch(setLoginStatus(false));
        alert('error', 'Upps...', error.message);
      }
    );
  }
}

export function getNotifications(uid: string) {
  return async (dispatch: Function) => {
    firebase.on('notify', 
      (snapshot: any) => {
        if (snapshot.val()[uid]) {
          const data: Array<NotificationModel> = [];
          const notifyData: any = snapshot.val()[uid];
          
          for (var key in notifyData) {
            if (!notifyData[key].see) {
              const { 
                icon, 
                title, 
                message, 
                link, 
                see 
              } = notifyData[key];
              
              data.push(new NotificationModel({
                id: key,
                icon,
                title,
                message,
                link,
                see
              }));
            }
          }

          dispatch(
            setNotifications(data)
          );
        } else {
          dispatch(setNotifications([]));
        }
      }
    );
  }
}

export function removeNotification(id: string, idNotify: string) {
  return async () => {
    userService.removeNotification(id, idNotify,
      (resp: any) => { }, 
      (error: any) => {
        toast('error', error.message);
      }
    );
  }
}

export function createNotification(notificationData: NotificationModel) {
  return async () => {
    userService.createNotification(notificationData, 
      (resp: any) => { }, 
      (error: any) => {
        toast('error', error.message);
      }
    );
  }
} 