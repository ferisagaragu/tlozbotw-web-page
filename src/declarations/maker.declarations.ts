import { MakerModel } from "../core/models/maker.model";
import enidImg from '../styles/img/makers/enid.jpg';
import ferImg from '../styles/img/makers/fer.jpg';

export const makers: Array<MakerModel> = [
  {
    img: enidImg,
    name:'Enid Medina (Miau)',
    jobs: [
      'Desarrolladora web',
      'Arte conceptual'
    ],
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati veniam maxime delectus dolores nobis earum! Reprehenderit repellat, asperiores, alias corrupti illum amet officiis quo architecto ut voluptatem voluptas blanditiis?',
    facebook: 'https://www.facebook.com/medina.lopez.enid',
    twitter: 'https://twitter.com/SailorMiiau',
    github: 'https://github.com/Miiaauu'
  },{
    img: ferImg,
    name:'Fernando Garcia (Fernny)',
    jobs: [
      'Desarrolladora web',
      'Gestion general'
    ],
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati veniam maxime delectus dolores nobis earum! Reprehenderit repellat, asperiores, alias corrupti illum amet officiis quo architecto ut voluptatem voluptas blanditiis?',
    facebook: 'https://www.facebook.com/medina.lopez.enid',
    twitter: 'https://twitter.com/SailorMiiau',
    github: 'https://github.com/Miiaauu'
  }
]; 