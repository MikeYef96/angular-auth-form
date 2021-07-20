import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/auth/services/auth.service';
import { USERS_DATA_TABLE_ADMIN_ARRAY } from '../../constants/user-data-list.constant';
import { IDashboardState } from '../../model/dashboard-state.model';
import { getUsersRequest } from '../../store/dashboard.actions';
import { selectAllUsers } from '../../store/dashboard.selectors';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
})
export class UsersDataComponent {
  displayedColumns: string[] = USERS_DATA_TABLE_ADMIN_ARRAY;
  dataSource = this.storeDashboard.select(selectAllUsers);

  constructor(
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getUsersRequest());
  }
}
