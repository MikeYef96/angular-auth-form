import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IAssessmentData,
  IUserAssessment,
  IUser,
  IAssessmentGraphData,
} from 'src/app/dashboard/model/get-users.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends ApiService {
  constructor(protected injector: Injector) {
    super(injector);
  }

  getUsers(): Observable<IUser[]> {
    return super.get<IUser[]>('users');
  }

  getAssessments(): Observable<IAssessmentData[]> {
    return super.get<IAssessmentData[]>('userassessments');
  }

  getAssessmentsGraph(id: number): Observable<IUserAssessment[]> {
    return super.get<IUserAssessment[]>(`userassessments/graph?id=${id}`, {
      id,
    });
  }
}
