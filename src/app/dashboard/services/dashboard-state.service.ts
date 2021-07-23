import { Injectable } from '@angular/core';
import {
  IReportsGraph,
  IUserData,
  IUserReports,
} from '../model/get-users.model';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { DashboardApiService } from './dashboard-api.service';
import { AuthApiService } from '../../auth/services/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardStateService {
  private userDataSubject = new BehaviorSubject<IUserData[]>([]);
  private reportsDataSubject = new BehaviorSubject<IUserReports[]>([]);
  private graphDataSubject = new BehaviorSubject<IReportsGraph | null>(null);

  userData$ = this.userDataSubject.asObservable();
  reportsData$ = this.reportsDataSubject.asObservable();
  graphData$ = this.graphDataSubject.asObservable();

  constructor(
    private dashboardApiService: DashboardApiService,
    private authApiService: AuthApiService
  ) {
    this.userData$
      .pipe(take(1))
      .subscribe(() =>
        this.authApiService.getRole() === 'Admin'
          ? this.dashboardApiService
              .getUsers()
              .subscribe((value: IUserData[]) => this.setUsers(value))
          : null
      );

    this.reportsData$
      .pipe(take(1))
      .subscribe(() =>
        this.dashboardApiService
          .getReports()
          .subscribe((value) => this.setReports(value))
      );

    this.graphData$
      .pipe(take(1))
      // .subscribe((data: IReportsGraph | null) =>
      //   this.dashboardApiService.getGraph(data?.id)
      .subscribe((value) => this.setGraph(value));
  }

  setUsers(newValue: IUserData[]): void {
    this.userDataSubject.next(newValue);
  }

  setReports(newValue: IUserReports[]): void {
    this.reportsDataSubject.next(newValue);
  }

  setGraph(newValue: IReportsGraph | null): void {
    this.graphDataSubject.next(newValue);
  }
}
