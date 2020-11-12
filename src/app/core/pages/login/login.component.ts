import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  group: FormGroup;

  authService: AuthService;

  constructor(service: AuthService) {
    this.authService = service;
    this.setForm();
  }

  setForm(): void {
    this.group = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  login(): void {
    const status = this.group.valid;
    if (!status) return;
    const infoUser = this.group.value;
    this.authService.login(infoUser);
  }
}
