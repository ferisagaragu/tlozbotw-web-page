import { UserMenuModel } from "../core/models/user-menu.model";

const userMenu: Array<UserMenuModel> = [
  {
    label: 'Fernando Isaías García Aguirre',
    value: 'userName'
  },{
    label: 'Notificaciones',
    value: 'notify'
  },{
    label: 'Configuraciones',
    value: 'config'
  },{
    separator: true
  },{
    label: 'Cerrar sesión',
    value: 'closeSesion'
  }
];

export default userMenu;