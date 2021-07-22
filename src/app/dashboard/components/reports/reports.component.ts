import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { USER_TABLE_DATA_ARRAY } from '../../constants/user.constant';
import { IUserReports } from '../../model/get-users.model';

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
  reportsDataSource: IUserReports[] = [];

  expandedElement: IUserReports | undefined;
  columnsToDisplay: string[] = USER_TABLE_DATA_ARRAY;

  // reportsDataSource: Observable<IUserReports[]> = this.dashboardService
  //   .getReports()
  //   .pipe(map((assessments: IUserReports[]) => assessments));

  constructor(
    public authService: AuthService,
    private dashboardService: DashboardService
  ) {
    this.dashboardService.reportsData$
      .pipe(take(1))
      .subscribe(value => this.reportsDataSource = value)
  }
}
