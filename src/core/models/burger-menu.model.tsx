import { ReactElement } from "react";

export class BurgerMenuModel {

  icon: ReactElement;
  label: string;
  url: string;

  constructor(data: any | BurgerMenuModel) {
    this.icon = <></>;
    this.label = '';
    this.url = '';

    Object.assign(this, data);
  }
}