export class NotificationModel {

  id: string;
  icon: string;
  title: string;
  message: string;
  link: string;
  see: boolean;

  constructor(data: any | NotificationModel) {
    this.id = '';
    this.icon = '';
    this.title = '';
    this.message = '';
    this.link = '';
    this.see = false;

    Object.assign(this, data);
  }
}