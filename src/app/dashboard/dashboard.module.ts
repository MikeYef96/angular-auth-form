import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [DashboardComponent, UserComponent, AdminComponent, ChartComponent],
  imports: [
    UserModule,
    AdminModule,
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
  ],
})
export class DashboardModule {}
