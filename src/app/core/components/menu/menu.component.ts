import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from '../../../services/menu.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  listMenu: Menu[] = [];

  constructor(
    private readonly router: Router,
    private readonly menuService: MenuService,
    private readonly authService: AuthService
  ) {
    this.listMenu = menuService.getMenu();
  }

  ngOnInit(): void {}

  goToSection(path: string): void {
    this.router.navigate([path]);
  }

  logout(): void {
    this.authService.logout();
  }
}
