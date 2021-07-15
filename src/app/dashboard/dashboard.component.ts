import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { selectAllUsers } from './store/dashboard/dashboard.selectors';
import { Store } from '@ngrx/store';
import { UserData } from '../shared/models/user-data.model';
import { AuthService } from '../auth/services/auth.service';
import { getUsersRequest } from './store/dashboard/dashboard.actions';
import { selectRole } from '../auth/store/auth/auth.selectors';
import { IDashboardState } from './store/dashboard/dashboard.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(
    private store: Store<UserData>,
    public authService: AuthService
  ) {}

  role$ = this.store.select(selectRole);

  // displayedColumns: string[] = ['first_name', 'last_name', 'email', 'groups'];
  // dataSource = this.storeDashboard.select(selectAllUsers);

  ngOnInit() {}
}
