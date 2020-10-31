import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, mergeMap } from 'rxjs/operators';
import { StorageRepository } from '../repositories/storage.repository';
import { AuthService } from '../services/auth.service';
import { UtilService } from '../services/util.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly storage: StorageRepository,
    private readonly injector: Injector,
    private readonly utilService: UtilService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.url);
    if (req.url.includes('/auth')) {
      return next.handle(req);
    }

    const user = JSON.parse(this.storage.get('user'));
    const token = user.accessToken;

    const requestClone = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token}`),
    });

    const authService: AuthService = this.injector.get(AuthService);

    return next.handle(requestClone).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
        } else if (error.status === 401) {
          return authService.getNewAccessToken().pipe(
            retry(3),
            mergeMap((response: any) => {
              this.storage.save('user', JSON.stringify(response.result));
              //  response = {accessToken: "...", refreshToken:  "..."}

              const newUser = JSON.parse(this.storage.get('user'));
              const newAccessToken = newUser.accessToken;

              const newRequestClone = req.clone({
                headers: req.headers.append(
                  'Authorization',
                  `Bearer ${newAccessToken}`
                ),
              });

              return next.handle(newRequestClone);
            })
          );
        } else if (error.status === 409) {
          authService.logout();
        } else {
          if (error.error && error.error.result) {
            if (error.status === 404) {
              this.utilService.showMessage(error.error.result);
            }
            return throwError(error.error.result);
          }
        }
      })
    );
  }
}
