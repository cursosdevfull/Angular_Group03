import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[formGroup]',
})
export class ErrorFormDirective {
  @Input('formGroup') group: FormGroup;

  @HostListener('submit', ['$event']) submit() {
    this.markAsTouched(this.group);
  }

  private markAsTouched(formGroup: FormGroup) {
    for (const control in formGroup.controls) {
      if (formGroup.controls[control]) {
        formGroup.controls[control].updateValueAndValidity();
      }
    }
  }
}
