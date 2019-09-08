export class MaterialModel {

  id: number;
  name: string;
  pe: string;
  power: string;
  location: string;
  description: string;
  img: string;
  check: boolean;

  constructor(data: any | MaterialModel) {
    this.id = 0;
    this.name = '';
    this.pe = '';
    this.power = '';
    this.location = '';
    this.description = '';
    this.img = '';
    this.check = false;

    Object.assign(this, data);
  }
}