import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { UsersDataComponent } from './components/users-data/users-data.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/reports',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['Admin', 'User'],
        },
      },
      {
        path: 'users-data',
        component: UsersDataComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['Admin'],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
