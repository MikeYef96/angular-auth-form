import {Injectable, Injector} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

import {
  IUserReports,
  IReportsGraph,
  IUserData,
} from 'src/app/dashboard/model/get-users.model';
import { ApiService } from '../../shared/services/api.service';
import { CHART_DATA_VALUES_ARRAY } from '../constants/table-data.constant';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends ApiService{
  readonly userDataSubject = new BehaviorSubject<IUserData[]>([]);
  readonly reportsDataSubject = new BehaviorSubject<IUserReports[]>([])
  // readonly graphDataSubject = new BehaviorSubject<IReportsGraph | null>(null)

  userData$ = this.userDataSubject.asObservable();
  reportsData$ = this.reportsDataSubject.asObservable();
  // graphData$ = this.graphDataSubject.asObservable();

  // id: number = 0

  constructor(protected injector: Injector) {
    super(injector);

    this.userData$
      .pipe(take(1))
      .subscribe(() => this.getUsers().subscribe(value => this.setUsers(value)));

    this.reportsData$
      .pipe(take(1))
      .subscribe(() => this.getReports().subscribe(value => this.setReports(value)));

    // this.graphData$
    //   .pipe(take(1))
    //   .subscribe(() => this.getGraph(this.id).subscribe(value => this.setReportsGraph(value)));
  }

  getUsers(): Observable<IUserData[]> {
    return super.get<IUserData[]>('users');
  }

  getReports(): Observable<IUserReports[]> {
    return super.get<IUserReports[]>('userassessments');
  }

  getGraph(id: number | null): Observable<IReportsGraph> {
    return CHART_DATA_VALUES_ARRAY.pipe(
      map((graphData: IReportsGraph[]) => graphData.find((item: IReportsGraph) => Boolean(item.id === id))
      )
    ) as unknown as Observable<IReportsGraph>;
  }

  setUsers(newValue: IUserData[]): void {
    this.userDataSubject.next(newValue)
  }

  setReports(newValue: IUserReports[]): void {
    this.reportsDataSubject.next(newValue)
  }

  // setReportsGraph(newValue: IReportsGraph): void {
  //   this.graphDataSubject.next(newValue)
  // }
}
