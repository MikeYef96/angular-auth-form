import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  IUserReports,
  IReportsGraph,
  IUserData,
} from 'src/app/dashboard/model/get-users.model';
import { ApiService } from '../../shared/services/api.service';
import { CHART_DATA_VALUES_ARRAY } from '../constants/chart-data-values';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends ApiService {
  constructor(protected injector: Injector, private http: HttpClient) {
    super(injector);
  }

  getUsers(): Observable<IUserData[]> {
    return super.get<IUserData[]>('users');
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
