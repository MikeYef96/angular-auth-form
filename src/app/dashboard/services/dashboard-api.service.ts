import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
export class DashboardApiService extends ApiService {
  constructor(protected injector: Injector) {
    super(injector);
  }

  getUsers(): Observable<IUserData[]> {
    return super.get<IUserData[]>('users');
  }

  getReports(): Observable<IUserReports[]> {
    return super.get<IUserReports[]>('userassessments');
  }

  getGraphById(id: number | null): Observable<IReportsGraph> {
    return CHART_DATA_VALUES_ARRAY.pipe(
      map((charts: IReportsGraph[]) =>
        charts.find((chart: IReportsGraph) => Boolean(chart.id === id))
      )
    ) as Observable<IReportsGraph>;
  }
}
