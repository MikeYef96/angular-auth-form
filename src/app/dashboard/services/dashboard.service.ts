import {Injectable, Injector} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
  readonly dataSubject = new BehaviorSubject<IUserData[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor(protected injector: Injector) {
    super(injector);

    this.setUsers()
      .subscribe(
        (newValue:IUserData[]) => this.dataSubject.next(newValue))
  }

  getUsers(): Observable<IUserData[]> {
    return super.get<IUserData[]>('users');
  }

  setUsers(): Observable<IUserData[]> {
   return  this.getUsers()
      .pipe(
        map((users: IUserData[]) => users));
  }

  getAssessments(): Observable<IUserReports[]> {
    return super.get<IUserReports[]>('userassessments');
  }

  getAssessmentsGraph(id: number | null): Observable<IReportsGraph> {
    return CHART_DATA_VALUES_ARRAY.pipe(
      map((graphData: IReportsGraph[]) =>
        graphData.find((item) => Boolean(item.id === id))
      )
    ) as Observable<IReportsGraph>;
  }
}
