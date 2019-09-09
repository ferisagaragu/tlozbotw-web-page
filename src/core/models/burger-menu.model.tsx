import { ReactElement } from "react";

export class BurgerMenuModel {

  icon: ReactElement;
  label: string;
  url?: string;
  children?: Array<BurgerMenuModel>;

  constructor(data: any | BurgerMenuModel) {
    this.icon = <></>;
    this.label = '';
    this.url = '';
    this.children = [];

    Object.assign(this, data);
  }
}