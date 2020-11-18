import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'summary',
    loadChildren: () =>
      import('./summary/summary.module').then((m) => m.SummaryModule),
    data: {
      rolesAllowed: ['ADMINISTRATOR'],
    },
  },
  {
    path: 'histories',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
    data: {
      rolesAllowed: ['ADMINISTRATOR'],
    },
  },
  {
    path: 'medics',
    canActivate: [AuthorizationGuard],
    loadChildren: () =>
      import('./medic/medic.module').then((m) => m.MedicModule),
    data: {
      rolesAllowed: ['ADMINISTRATOR'],
    },
  },
  {
    path: 'users',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    data: {
      rolesAllowed: ['ADMINISTRATOR'],
    },
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
    data: {
      rolesAllowed: ['ADMINISTRATOR'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
