import { Injectable } from '@angular/core';
import {
  IReportsGraph,
  IUserData,
  IUserReports,
} from '../model/get-users.model';
import { BehaviorSubject } from 'rxjs';

import { DashboardApiService } from './dashboard-api.service';

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
    private dashboardApiService: DashboardApiService
  ) { }

  setUsers(): void {
    this.dashboardApiService.getUsers()
      .pipe()
      .subscribe((users: IUserData[]) => this.userDataSubject.next(users))
  }

  setReports(): void {
    this.dashboardApiService.getReports()
      .subscribe(reports => this.reportsDataSubject.next(reports))
  }

  setGraphData(userId: number): void {
    this.dashboardApiService.getGraphById(userId)
      .subscribe((graphData: IReportsGraph) => this.graphDataSubject.next(graphData))
  }
}
