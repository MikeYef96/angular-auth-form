import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import { ngxCsv } from 'ngx-csv';

import { AuthApiService } from 'src/app/auth/services/auth-api.service';
import { USERS_DATA_TABLE_ADMIN_ARRAY } from '../../constants/user-data-list.constant';
import { IUserData } from '../../model/get-users.model';
import {DashboardStateService} from "../../services/dashboard-state.service";

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
})
export class UsersDataComponent implements OnInit, OnDestroy {
  userDataSource: IUserData[] = [];
  subscription$: Subject<IUserData[]> = new Subject();

  displayedColumns: string[] = USERS_DATA_TABLE_ADMIN_ARRAY;

  constructor(
    public authService: AuthApiService,
    private dashboardStateService: DashboardStateService,
  ) {
    // this.dashboardStateService.userData$
    //   .pipe(take(1))
    //   .subscribe(() => this.dashboardApiService.getUsers()
    //     .subscribe((value: IUserData[]) =>
    //       this.dashboardStateService.setUsers(value)))
  }

  ngOnInit(): void {
    this.dashboardStateService.userData$
      .pipe(takeUntil(this.subscription$))
      .subscribe(value => this.userDataSource = value)
  }

  onDownload() {
    this.dashboardStateService.userData$
      .pipe(take(1))
      .subscribe(
        (users: IUserData[]) => new ngxCsv(users, 'My Report'));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
