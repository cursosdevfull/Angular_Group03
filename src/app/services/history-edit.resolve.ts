import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { HistoryService } from './history.service';

@Injectable()
export class HistoryEditResolve implements Resolve<any> {
  constructor(private readonly historyService: HistoryService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    /* this.historyService.getOne(id).subscribe((respuesta) => {
          console.log(respuesta);
        }); */
    return this.historyService.getOne(id);
  }

  /*   resolve() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id', this.activatedRoute);
    /* this.historyService.getOne(id).subscribe((respuesta) => {
      console.log(respuesta);
    }); */
  //return this.historyService.getOne(id);
  // } */
}
