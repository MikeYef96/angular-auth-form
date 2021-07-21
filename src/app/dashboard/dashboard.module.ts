import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";

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
    MatCheckboxModule,
  ],
})
export class DashboardModule {}
