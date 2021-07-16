import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'dashboard/userassessments',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['Admin', 'User'],
    },
  },
  {
    path: 'dashboard/users-data',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['Admin'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
