import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listMenu: Menu[] = [
    {
      title: 'Resumen',
      icon: 'dashboard',
      path: '/summary',
      roles: ['ADMINISTRATOR'],
    },
    {
      title: 'Usuarios',
      icon: 'face',
      path: '/users',
      roles: ['OPERATOR'],
    },
    {
      title: 'Médicos',
      icon: 'favorite_border',
      path: '/medics',
      roles: ['ADMINISTRATOR', 'MEDIC'],
    },
    {
      title: 'Pilotos',
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
