import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Directive({
  selector: '[appRolesAllowed]',
})
export class RolesAllowedDirective implements OnInit {
  @Input() appRolesAllowed = [];
  hasView = false;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly authservice: AuthService
  ) {}

  ngOnInit() {
    this.authservice
      .getStatusUser()
      .pipe(startWith(' '))
      .subscribe(() => {
        this.execute();
      });
  }

  execute() {
    const userLogged = this.authservice.isUserLogged;
    const rolesUser = this.authservice.getRoles();
    const userWithRoleAllowed = this.hasUserAnyRoleAllowed(rolesUser);

    if (userLogged && userWithRoleAllowed && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!userLogged || (!userWithRoleAllowed && this.hasView)) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

  hasUserAnyRoleAllowed(rolesUser) {
    let match = false;
    rolesUser.forEach((roleUser) => {
      if (this.appRolesAllowed.indexOf(roleUser.roleName) > -1) match = true;
    });

    return match;
  }
}
