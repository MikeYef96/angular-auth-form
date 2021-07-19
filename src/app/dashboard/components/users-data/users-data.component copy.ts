import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { USERS_DATA_TABLE_ADMIN_ARRAY } from '../../constants/admin';
import { getUsersRequest } from '../../store/dashboard.actions';
import { IDashboardState } from '../../store/dashboard.reducer';
import {
  selectAllAssessments,
  selectAllUsers,
} from '../../store/dashboard.selectors';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
})
export class UsersDataComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getUsersRequest());
  }

  displayedColumns: string[] = USERS_DATA_TABLE_ADMIN_ARRAY;
  dataSource = this.storeDashboard.select(selectAllUsers);

  ngOnInit(): void {
    // this.storeDashboard.select(selectAllUsers).subscribe((user) => console.log(user));
  }
}
