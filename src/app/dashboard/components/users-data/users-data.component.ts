import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ngxCsv } from 'ngx-csv';

import { AuthService } from 'src/app/auth/services/auth.service';
import { USERS_DATA_TABLE_ADMIN_ARRAY } from '../../constants/user-data-list.constant';
import { DashboardService } from '../../services/dashboard.service';
import { IUserData } from '../../model/get-users.model';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
})
export class UsersDataComponent implements OnDestroy {
  subscription: Subject<IUserData[]> = new Subject();
  displayedColumns: string[] = USERS_DATA_TABLE_ADMIN_ARRAY;

  dataSource: Observable<IUserData[]> = this.dashboardService
    .getUsers()
    .pipe(map((users: IUserData[]) => users));

  constructor(
    public authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  onDownload() {
    this.dashboardService
      .getUsers()
      .pipe(takeUntil(this.subscription))
      .subscribe((users: IUserData[]) => new ngxCsv(users, 'My Report'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
