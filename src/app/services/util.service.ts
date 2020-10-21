import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(
    private readonly dialog: MatDialog,
    private readonly notifier: MatSnackBar
  ) {}

  openModal(
    component: any,
    options: { [s: string]: string | number | boolean | {} }
  ): Observable<any> {
    const reference: MatDialogRef<typeof component> = this.dialog.open(
      component,
      options
    );

    return reference.afterClosed();
  }

  showMessage(message: string): void {
    this.notifier.open(message, null, {
      duration: 2000,
    });
  }
}
