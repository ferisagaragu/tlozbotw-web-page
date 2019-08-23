export class NotificationModel {

  id: string;
  icon: string;
  title: string;
  message: string;
  link: string;

  constructor(data: any | NotificationModel) {
    this.id = '';
    this.icon = '';
    this.title = '';
    this.message = '';
    this.link = '';

    Object.assign(this, data);
  }
}