import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CHART_DATA_ARRAY, USER_TABLE_DATA_ARRAY } from '../../constants/user';
import {
  IAssessmentData,
  IAssessmentGraphData,
  IUserAssessment,
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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() id = 1;

  constructor(
    private dashboardService: DashboardService,
    public authService: AuthService,
    public expandedElement: Store<IAssessmentGraphData>,
    public storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
  }

  displayedAssessmentColumns: string[] = USER_TABLE_DATA_ARRAY;

  columnsToDisplay: string[] = CHART_DATA_ARRAY;

  dataAssessmentSource = this.storeDashboard.select(selectAllAssessments);

  ngOnInit(): void {
    // this.expandedElement.dispatch(this.id);
  }

  getAssessmentGraph(): void {
    console.log('click');
    this.storeDashboard.dispatch(getGraphRequest());
  }

  graph$ = this.storeDashboard.select(selectAllAssessmentsGraph);

  getAll(): void {
    this.storeDashboard
      .select(selectAllAssessmentsGraph)
      .subscribe((v) => console.log(v));
    // this.dashboardService.getAssessmentsGraph(this.id).subscribe((result) => {
    //   console.log(result.map((x) => x));
    // });
  }

  // getGraphs(): Observable<IUserAssessment[]> {

  //   return this.graph$;
  // }
}
