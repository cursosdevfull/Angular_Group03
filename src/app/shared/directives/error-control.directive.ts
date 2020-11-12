import { Directive, ElementRef } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { ErrorsService } from 'src/app/services/errors.service';
import * as uuid from 'uuid';

@Directive({
  selector: '[formControlName], [formControl]',
})
export class ErrorControlDirective {
  errorSpanId = '';

  constructor(
    private el: ElementRef,
    private control: NgControl,
    private errors: ErrorsService
  ) {}

  ngOnInit() {
    this.errorSpanId = uuid.v4();
    this.control.statusChanges.subscribe((status) => {
      if (status === 'INVALID') {
        this.insertMessageError();
      } else {
        this.removeMessageError();
      }
    });
  }

  private insertMessageError() {
    this.removeMessageError();
    const valueErrors: ValidationErrors = this.control.errors;
    const firstError = Object.keys(valueErrors)[0];
    const errorMsg = this.errors.getMessage(firstError);

    const errSpan = `<span style="color:red;font-style: italic; font-size:11px"
       id="${this.errorSpanId}">${errorMsg}</span>`;

    this.el.nativeElement.parentElement.insertAdjacentHTML(
      'beforeend',
      errSpan
    );
  }

  private removeMessageError() {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) {
      errorElement.remove();
    }
  }
}
