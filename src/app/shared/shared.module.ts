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
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorFormDirective } from './directives/error-form.directive';
import { ErrorControlDirective } from './directives/error-control.directive';
import { ExportComponent } from './components/export/export.component';
import { HttpClientModule } from '@angular/common/http';
import { ReductorPipe } from './pipes/reductor.pipe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    HeadlineComponent,
    TableComponent,
    KeypadComponent,
    PhotoComponent,
    UploadDirective,
    ConfirmComponent,
    RolesAllowedDirective,
    ErrorFormDirective,
    ErrorControlDirective,
    ExportComponent,
    ReductorPipe,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    FlexLayoutModule,
    MatListModule,
    HttpClientModule,
  ],
  exports: [
    MatPaginatorModule,
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
    MatListModule,
    MatBottomSheetModule,
    MatTabsModule,
    HeadlineComponent,
    TableComponent,
    KeypadComponent,
    PhotoComponent,
    UploadDirective,
    ConfirmComponent,
    PerfectScrollbarModule,
    RolesAllowedDirective,
    ErrorFormDirective,
    ErrorControlDirective,
    ExportComponent,
    ReductorPipe,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class SharedModule {}
