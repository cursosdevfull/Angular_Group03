import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { PageHistoryComponent } from './pages/page-history/page-history.component';
import { SharedModule } from '../shared/shared.module';
import { EditHistoryComponent } from './components/edit-history/edit-history.component';
import { ListHistoryComponent } from './components/list-history/list-history.component';

@NgModule({
  declarations: [
    PageHistoryComponent,
    EditHistoryComponent,
    ListHistoryComponent,
  ],
  imports: [CommonModule, HistoryRoutingModule, SharedModule],
})
export class HistoryModule {}
