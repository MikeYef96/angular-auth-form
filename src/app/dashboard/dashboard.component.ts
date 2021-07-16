import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserData } from '../shared/models/user-data.model';
import { AuthService } from '../auth/services/auth.service';
import { selectRole } from '../auth/store/auth/auth.selectors';
import { IDashboardState } from './store/dashboard/dashboard.reducer';
import { getAssessmentsRequest } from './store/dashboard/dashboard.actions';
import { selectAllAssessments } from './store/dashboard/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(
    private store: Store<UserData>,
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
  }

  role$ = this.store.select(selectRole);

  displayedColumns: string[] = [
    'id',
    'name',
    'users_resolved',
    'active',
    'image_url',
  ];
  dataSource = this.storeDashboard.select(selectAllAssessments);

  ngOnInit() {
    this.storeDashboard
      .select(selectAllAssessments)
      .subscribe((v) => console.log(v));
  }
}
