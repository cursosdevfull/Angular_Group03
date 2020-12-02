import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly translate: TranslateService) {}

  ngOnInit(): void {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
