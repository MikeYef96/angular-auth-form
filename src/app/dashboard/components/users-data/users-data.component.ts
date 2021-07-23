import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { ngxCsv } from 'ngx-csv';

import { AuthApiService } from 'src/app/auth/services/auth-api.service';
import { USERS_DATA_TABLE_ADMIN_ARRAY } from '../../constants/user-data-list.constant';
import { IUserData } from '../../model/get-users.model';
import { DashboardStateService } from '../../services/dashboard-state.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
})
export class UsersDataComponent {
  displayedColumns: string[] = USERS_DATA_TABLE_ADMIN_ARRAY;

  constructor(
    public authService: AuthApiService,
    public dashboardStateService: DashboardStateService
  ) {
    dashboardStateService.setUsers()
  }

  onDownload() {
    this.dashboardStateService.userData$
      .pipe(take(1))
      .subscribe((users: IUserData[]) => new ngxCsv(users, 'My Report'));
  }
}
