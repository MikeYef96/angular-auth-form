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
export class UsersComponent implements OnInit {
  role$ = this.store.select(selectRole);
  allUsers$ = this.storeDashboard.select(selectAllUsers);

  constructor(
    private store: Store<UserData>,
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getUsersRequest());
  }

  ngOnInit() {
    this.storeDashboard.select(selectAllUsers).subscribe(v => console.log(v))
  }

}
