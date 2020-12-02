import { Subscription } from 'rxjs';

export abstract class DeSubscribeAbstract {
  ngOnDestroy() {
    for (const el in this) {
      const prop: any = this[el];
      if (prop instanceof Subscription) {
        prop.unsubscribe();
      }
    }
  }
}
