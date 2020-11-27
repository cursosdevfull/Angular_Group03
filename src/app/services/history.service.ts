import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { mappingHistory } from '../dtos/history.dto';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private readonly http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.pathApi}/histories`);
  }

  getByPage(page: number) {
    return this.http.get(`${environment.pathApi}/histories/page/${page}`).pipe(
      pluck('result'),
      map((data: { total: number; items: History[] }) => {
        return { total: data.total, items: mappingHistory(data.items) };
      })
    );
  }

  getOne(id: string) {
    return this.http
      .get(`${environment.pathApi}/histories/${id}`)
      .pipe(pluck('result'));
  }
}
