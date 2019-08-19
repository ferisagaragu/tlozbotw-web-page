export class UserMenuModel {

  label?: string;
  value?: any;
  separator?: boolean;

  constructor(data: any | UserMenuModel) {
    this.label = '';
    this.value = null;
    this.separator = false;

    Object.assign(this, data);
  }
}