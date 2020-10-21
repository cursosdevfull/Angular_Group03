import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HeadlineComponent } from './components/headline/headline.component';
import { TableComponent } from './components/table/table.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';

@NgModule({
  declarations: [
    HeadlineComponent,
    TableComponent,
    KeypadComponent,
    PhotoComponent,
    UploadDirective,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    HeadlineComponent,
    TableComponent,
    KeypadComponent,
    PhotoComponent,
    UploadDirective,
  ],
})
export class SharedModule {}
