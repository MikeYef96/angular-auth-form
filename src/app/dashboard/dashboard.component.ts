import { Component } from '@angular/core';

import {DashboardService} from "./services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    private dashboardService: DashboardService
  ) {
    this.dashboardService.getReports()
  }
}
