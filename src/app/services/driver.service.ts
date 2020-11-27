import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Driver } from '../interfaces/driver.interface';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Driver[]> {
    return this.http
      .get(`${environment.pathApi}/drivers`)
      .pipe(pluck('result'));
  }
}
