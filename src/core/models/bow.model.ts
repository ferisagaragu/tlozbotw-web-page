export class BowModel {

  id: number;
  title: string;
  srcImage: string;
  damageBow: string;
  descriptionBow: string;

  constructor(data: any | BowModel) {
    this.id = 0;
    this.title = '';
    this.srcImage = '';
    this.damageBow = '';
    this.descriptionBow = '';

    Object.assign(this, data);
  }
}