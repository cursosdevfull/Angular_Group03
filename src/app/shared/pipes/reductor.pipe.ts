import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reductor',
})
export class ReductorPipe implements PipeTransform {
  transform(value, max: number, textMore: string) {
    if (max < value.length) {
      return value;
    }
    return value.substring(0, max) + ' ...' + textMore;
  }
}
