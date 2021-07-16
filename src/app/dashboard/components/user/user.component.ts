import { Component, Input, OnInit } from '@angular/core';
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
  @Input() id = 1;

  constructor(
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
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

  ngOnInit(): void {}

  getAssessmentGraph(): void {
    this.id + 1;
    console.log(this.id);
    // this.storeDashboard.dispatch(getGraphRequest(selectAllAssessmentsGraph));
  }
}
