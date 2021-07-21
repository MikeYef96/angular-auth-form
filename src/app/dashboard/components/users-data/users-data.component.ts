import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import { AuthService } from 'src/app/auth/services/auth.service';
import { USERS_DATA_TABLE_ADMIN_ARRAY } from '../../constants/user-data-list.constant';
import {DashboardService} from "../../services/dashboard.service";
import {IUserData} from "../../model/get-users.model";
import {ngxCsv} from "ngx-csv";

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
})
export class UsersDataComponent {
  displayedColumns: string[] = USERS_DATA_TABLE_ADMIN_ARRAY;

  dataSource: Observable<IUserData[]> =
    this.dashboardService.getUsers()
      .pipe(map((users: IUserData[]) => users))

  constructor(
    public authService: AuthService,
    private dashboardService: DashboardService,
  ) {}

  onDownload() {
   this.dataSource  =
      this.dashboardService.getUsers()
        .pipe(map((users: IUserData[]) => {
          new ngxCsv(users, 'My Report');
          return users
        }))

    return this.dataSource
  }
}
