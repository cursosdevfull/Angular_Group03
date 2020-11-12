import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  private messagesError = {
    required: 'Campo requerido',
    email: 'No es un correo',
    pattern: 'Patrón incorrecto',
    maxlength: 'Excedió el máximo de caracteres',
  };

  constructor() {}

  getMessage(typeError: string): string {
    return this.messagesError[typeError];
  }
}
