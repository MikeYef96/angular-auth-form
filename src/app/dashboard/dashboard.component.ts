import { Component } from '@angular/core';

import { DashboardStateService } from './services/dashboard-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dashboardStateService: DashboardStateService) {
    this.dashboardStateService.reportsData$.subscribe();
  }
}
