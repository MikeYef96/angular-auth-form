import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartComponent } from './components/chart/chart.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UsersDataComponent } from './components/users-data/users-data.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ReportsComponent,
    UsersDataComponent,
    ChartComponent,
  ],
  imports: [
    BrowserAnimationsModule,
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
