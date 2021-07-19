import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CHART_DATA_VALUES_ARRAY } from '../../constants/chart_data';
import { CHART_DATA_ARRAY, USER_TABLE_DATA_ARRAY } from '../../constants/user';
import {
  IAssessmentData,
  IAssessmentGraphData,
  IUserAssessment,
  PeriodicElement,
} from '../../model/get-users.model';
import { DashboardService } from '../../services/dashboard.service';
import {
  getAssessmentsRequest,
  getGraphRequest,
} from '../../store/dashboard.actions';
import { IDashboardState } from '../../store/dashboard.reducer';
import {
  selectAllAssessments,
  selectAllAssessmentsGraph,
} from '../../store/dashboard.selectors';

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
export class ReportsComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    public authService: AuthService,
    public storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
  }

  CHART_DATA_VALUES_ARRAY: IAssessmentGraphData[] = [
    {
      agreeableness: 13.333333333333334,
      drive: 21.66666668,
      luck: 10,
      openess: 30,
    },
    {
      agreeableness: 21,
      drive: 14,
      luck: 40,
      openess: 19,
    },
    {
      agreeableness: 23,
      drive: 29,
      luck: 15,
      openess: 25,
    },
    {
      agreeableness: 35,
      drive: 8,
      luck: 20,
      openess: 30,
    },
  ];

  expandedElement: IAssessmentData | undefined;
  dataSource = this.CHART_DATA_VALUES_ARRAY;
  columnsToDisplay = USER_TABLE_DATA_ARRAY;

  id = CHART_DATA_VALUES_ARRAY;

  clickBtn: boolean = false;

  displayedAssessmentColumns: string[] = USER_TABLE_DATA_ARRAY;

  // columnsToDisplay: string[] = CHART_DATA_ARRAY;

  dataAssessmentSource: Observable<
    IAssessmentData[]
  > = this.storeDashboard.select(selectAllAssessments);

  ngOnInit(): void {
    // this.expandedElement.dispatch(this.id);
  }

  getAll(): void {
    console.log(this.clickBtn);
    this.clickBtn = !this.clickBtn;
    // this.dataAssessmentSource.subscribe((response) =>
    //   console.log(
    //     response.find((id: number[]) => id === this.id.map((id) => id.id ?? 4))
    //   )
    // );
  }
}
