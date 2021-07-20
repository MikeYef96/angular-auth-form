import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IUserData } from '../shared/models/user-data.model';
import { AuthService } from '../auth/services/auth.service';
import { selectRole } from '../auth/store/auth.selectors';
import { getAssessmentsRequest } from './store/dashboard.actions';
import { selectAllAssessments } from './store/dashboard.selectors';
import { IDashboardState } from './model/dashboard-state.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    private store: Store<IUserData>,
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
  }

  role$ = this.store.select(selectRole);

  dataSource = this.storeDashboard.select(selectAllAssessments);
}
