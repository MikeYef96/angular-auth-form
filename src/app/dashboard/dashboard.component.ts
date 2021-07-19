import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserData } from '../shared/models/user-data.model';
import { AuthService } from '../auth/services/auth.service';
import { selectRole } from '../auth/store/auth.selectors';
import { IDashboardState } from './store/dashboard.reducer';
import { getAssessmentsRequest } from './store/dashboard.actions';
import { selectAllAssessments } from './store/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(
    private store: Store<IUserData>,
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
  }

  role$ = this.store.select(selectRole);

  dataSource = this.storeDashboard.select(selectAllAssessments);

  ngOnInit() {
    this.storeDashboard
      .select(selectAllAssessments)
      .subscribe((v) => console.log(v));
  }
}
