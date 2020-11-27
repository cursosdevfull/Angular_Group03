import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryEditResolve } from '../services/history-edit.resolve';
import { EditHistoryComponent } from './components/edit-history/edit-history.component';
import { ListHistoryComponent } from './components/list-history/list-history.component';
import { PageHistoryComponent } from './pages/page-history/page-history.component';

const routes: Routes = [
  {
    path: '',
    component: PageHistoryComponent,
    children: [
      {
        path: '',
        component: ListHistoryComponent,
      },
      {
        path: 'edit/:id',
        component: EditHistoryComponent,
        resolve: {
          history: HistoryEditResolve,
        },
      },

      {
        path: 'new',
        component: EditHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
