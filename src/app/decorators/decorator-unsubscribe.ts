import { Subscription } from 'rxjs';

const Unsubscription = (parametro: any) => {
  return (constructor: any) => {
    constructor.prototype.ngOnDestroy = () => {
      for (const el in constructor.prototype) {
        const prop: any = constructor.prototype[el];
        if (prop instanceof Subscription) {
          prop.unsubscribe();
        }
      }
    };
  };
};

export { Unsubscription };
