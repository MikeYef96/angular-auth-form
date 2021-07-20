import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CHART_DATA_VALUES_ARRAY } from '../../constants/chart-data-values';
import { USER_TABLE_DATA_ARRAY } from '../../constants/user';
import { IUserReports, IReportsGraph } from '../../model/get-users.model';
import { getAssessmentsRequest } from '../../store/dashboard.actions';
import { IDashboardState } from '../../store/dashboard.reducer';
import { selectAllAssessments } from '../../store/dashboard.selectors';

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
  constructor(
    public authService: AuthService,
    public storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
  }

  chartDataValues: Observable<IReportsGraph[]> = CHART_DATA_VALUES_ARRAY;

  expandedElement: IUserReports | undefined;
  dataSource = this.chartDataValues;
  columnsToDisplay = USER_TABLE_DATA_ARRAY;

  id = CHART_DATA_VALUES_ARRAY;

  clickBtn: boolean = false;

  displayedAssessmentColumns: string[] = USER_TABLE_DATA_ARRAY;

  dataAssessmentSource: Observable<IUserReports[]> = this.storeDashboard.select(
    selectAllAssessments
  );

  getAll(): void {
    console.log(this.clickBtn);
    this.clickBtn = !this.clickBtn;
  }
}
