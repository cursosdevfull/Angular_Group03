import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { mappingHistory } from '../dtos/history.dto';
import { History } from '../interfaces/history.interface';

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

  insert(history: History) {
    delete history._id;
    return this.http.post(`${environment.pathApi}/histories/`, history);
  }

  update(history: History) {
    const _id = history._id;
    delete history._id;
    return this.http.put(`${environment.pathApi}/histories/${_id}`, history);
  }

  delete(_id: string) {
    return this.http.delete(`${environment.pathApi}/histories/${_id}`);
  }
}
