import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IAssessmentGraphData } from '../../model/get-users.model';
import {
  getAssessmentsRequest,
  getGraphRequest,
} from '../../store/dashboard/dashboard.actions';
import { IDashboardState } from '../../store/dashboard/dashboard.reducer';
import {
  selectAllAssessments,
  selectAllAssessmentsGraph,
} from '../../store/dashboard/dashboard.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public expandedElement: Store<IAssessmentGraphData>,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
    this.storeDashboard.dispatch(getGraphRequest());
  }

  displayedAssessmentColumns: string[] = [
    'id',
    'name',
    'users_resolved',
    'active',
    'image_url',
    'graph',
  ];
  dataAssessmentSource = this.storeDashboard.select(selectAllAssessments);

  columnsToDisplay: string[] = ['agreeableness', 'drive', 'luck', 'openess'];

  ngOnInit(): void {}

  getAssessmentGraph(graph: string): void {
    this.storeDashboard
      .select(selectAllAssessmentsGraph)
      .subscribe((v) => console.log(v));
  }
}
