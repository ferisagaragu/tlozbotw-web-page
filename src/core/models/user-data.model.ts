export class UserDataModel {

  send: boolean;
  message: string;
  data: any;

  constructor(data: any | UserDataModel) {
    this.send = false;
    this.message = '';
    this.data = null;

    Object.assign(this, data);
  }
}