import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageRepository } from '../repositories/storage.repository';
import { IResponse } from '../interfaces/response.interface';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userLogged = false;
  private onChangeStatusUser = new Subject();

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageRepository,
    private readonly router: Router
  ) {}

  login(user: User): void {
    this.http
      .post(`${environment.pathApi}/auth/login`, user)
      .subscribe((response: IResponse) => {
        this.storage.save('user', JSON.stringify(response.result));
        this.userLogged = true;
        this.onChangeStatusUser.next();
        this.router.navigate(['/summary']);
      });
  }

  logout(): void {
    this.storage.clear();
    this.userLogged = false;
    this.onChangeStatusUser.next();
    this.router.navigate(['/']);
  }

  get isUserLogged(): boolean {
    const user = this.storage.get('user');

    if (this.userLogged || user) {
      return true;
    }

    return false;
  }

  getNewAccessToken(): Observable<any> {
    const user = this.storage.get('user');
    const refreshToken = JSON.parse(user).refreshToken;
    return this.http.post(`${environment.pathApi}/auth/new-access-token`, {
      refreshToken,
    });
  }

  getStatusUser(): Observable<any> {
    return this.onChangeStatusUser.asObservable();
  }

  getRoles(): any {
    const user = this.storage.get('user');
    const accessToken = JSON.parse(user).accessToken;

    const jsonUser = jwt_decode(accessToken);

    return jsonUser.roles;
  }
}
