import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listMenu: Menu[] = [
    {
      title: 'MENU.RESUMEN',
      icon: 'dashboard',
      path: '/summary',
      roles: ['ADMINISTRATOR'],
    },
    {
      title: 'MENU.HISTORIAS',
      icon: 'face',
      path: '/histories',
      roles: ['ADMINISTRATOR'],
    },
    {
      title: 'MENU.USUARIOS',
      icon: 'face',
      path: '/users',
      roles: ['OPERATOR'],
    },
    {
      title: 'MENU.MEDICOS',
      icon: 'favorite_border',
      path: '/medics',
      roles: ['ADMINISTRATOR', 'MEDIC'],
    },
    {
      title: 'MENU.PILOTOS',
      icon: 'local_hospital',
      path: '/drivers',
      roles: ['ADMINISTRATOR'],
    },
  ];

  constructor() {}

  getMenu(): Menu[] {
    // Object.assign([], this.listMenu)
    return [...this.listMenu];
  }
}
