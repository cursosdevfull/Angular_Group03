import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { PageHistoryComponent } from './pages/page-history/page-history.component';
import { SharedModule } from '../shared/shared.module';
import { EditHistoryComponent } from './components/edit-history/edit-history.component';
import { ListHistoryComponent } from './components/list-history/list-history.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageHistoryComponent,
    EditHistoryComponent,
    ListHistoryComponent,
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
})
export class HistoryModule {}
