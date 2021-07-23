import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { AuthApiService } from 'src/app/auth/services/auth-api.service';
import { USER_TABLE_DATA_ARRAY } from '../../constants/user.constant';
import { IUserReports } from '../../model/get-users.model';
import { Subject } from 'rxjs';
import { DashboardStateService } from '../../services/dashboard-state.service';

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
export class ReportsComponent implements OnInit, OnDestroy {
  reportsDataSource: IUserReports[] = [];
  subscription: Subject<IUserReports[]> = new Subject();

  expandedElement: IUserReports | undefined;
  columnsToDisplay: string[] = USER_TABLE_DATA_ARRAY;

  constructor(
    public authService: AuthApiService,
    private dashboardStateService: DashboardStateService
  ) {
    // this.dashboardStateService.reportsData$
    //   .pipe(take(1))
    //   .subscribe(() =>
    //     this.dashboardApiService.getReports()
    //       .subscribe(value =>
    //         this.dashboardStateService.setReports(value)))
  }

  ngOnInit(): void {
    this.dashboardStateService.reportsData$
      .pipe(takeUntil(this.subscription))
      .subscribe((value) => (this.reportsDataSource = value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
