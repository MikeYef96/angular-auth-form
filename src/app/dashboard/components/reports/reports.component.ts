import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

import { USER_TABLE_DATA_ARRAY } from '../../constants/user.constant';
import { IUserReports } from '../../model/get-users.model';
import { DashboardStateService } from '../../services/dashboard-state.service';
import {LocalStorageService} from "../../../shared/services/local-storage.service";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ReportsComponent {
  expandedElement: IUserReports | undefined;
  columnsToDisplay: string[] = USER_TABLE_DATA_ARRAY;

  constructor(
    public localStorageService: LocalStorageService,
    public dashboardStateService: DashboardStateService
  ) {
    this.dashboardStateService.setReports();
  }
}
