export class BowModel {

  id: number;
  name: string;
  damage: string;
  description: string;
  img: string;

  constructor(data: any | BowModel) {
    this.id = 0;
    this.name = '';
    this.damage = '';
    this.description = '';
    this.img = '';

    Object.assign(this, data);
  }
}