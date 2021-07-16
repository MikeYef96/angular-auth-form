import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IAssessmentData,
  IUserAssessment,
  UserInterface,
} from 'src/app/dashboard/model/get-users.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends ApiService {
  constructor(protected injector: Injector) {
    super(injector);
  }

  getUsers(): Observable<UserInterface[]> {
    return super.get<UserInterface[]>('users');
  }

  getAssessments(): Observable<IAssessmentData[]> {
    return super.get<IAssessmentData[]>('userassessments');
  }

  getAssessmentsGraph(): Observable<IUserAssessment[]> {
    return super.get<IUserAssessment[]>('userassessments/graph');
  }
}
