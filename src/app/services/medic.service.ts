import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { StorageRepository } from '../repositories/storage.repository';
import { Medic } from '../interfaces/medic.interface';

@Injectable({
  providedIn: 'root',
})
export class MedicService {
  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageRepository
  ) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.pathApi}/medics`).pipe(pluck('result'));
  }

  update(fd: FormData): Observable<any> {
    // tslint:disable-next-line: variable-name
    const _id = fd.get('_id');
    // delete medic._id;
    fd.delete('_id');
    return this.http.put(`${environment.pathApi}/medics/${_id}`, fd);
  }

  insert(fd: FormData): Observable<any> {
    return this.http.post(`${environment.pathApi}/medics`, fd);
  }

  // tslint:disable-next-line: variable-name
  delete(_id: string): Observable<any> {
    return this.http.delete(`${environment.pathApi}/medics/${_id}`);
  }
}
