import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get(`${environment.pathApi}/locations`)
      .pipe(pluck('result'));
  }
}
