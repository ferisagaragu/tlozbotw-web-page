export class MakerModel {

  img: string;
  name: string;
  jobs: Array<string>;
  about: string;
  facebook: string;
  twitter: string;
  github: string;

  constructor(data: any | MakerModel) {
    this.img = '';
    this.name = '';
    this.jobs = [];
    this.about = '';
    this.facebook = '';
    this.twitter = '';
    this.github = '';

    Object.assign(this, data);
  }
}