import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}

  canActivate() {
    if (this.auth.isUserLogged) {
      return true;
    }

    return false;
  }
}
