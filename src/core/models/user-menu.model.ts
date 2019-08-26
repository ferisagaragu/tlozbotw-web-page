export class UserMenuModel {

  label?: any;
  value?: any;
  separator?: boolean;

  constructor(data: any | UserMenuModel) {
    this.label = '';
    this.value = null;
    this.separator = false;

    Object.assign(this, data);
  }
}