import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isUserLogged = false;

  constructor(
    private readonly authService: AuthService,
    private readonly translate: TranslateService
  ) {
    this.isUserLogged = this.authService.isUserLogged;

    this.authService.getStatusUser().subscribe(() => {
      this.isUserLogged = this.authService.isUserLogged;
    });

    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');

    const languageBrowser = this.translate.getBrowserLang();
    this.translate.use(languageBrowser.match(/es|en/) ? languageBrowser : 'es');
  }
}
