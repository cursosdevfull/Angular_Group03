import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const rolesAllowed = route.data.rolesAllowed;
    const rolesUser = this.auth.getRoles();

    return this.hasUserAnyRoleAllowed(rolesUser, rolesAllowed);
  }

  hasUserAnyRoleAllowed(rolesUser, rolesAllowed) {
    let match = false;
    rolesUser.forEach((roleUser) => {
      if (rolesAllowed.indexOf(roleUser.roleName) > -1) match = true;
    });

    return match;
  }
}
