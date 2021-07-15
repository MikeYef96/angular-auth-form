import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import {
  UserAssessmentData,
  UserInterface,
} from 'src/app/dashboard/model/get-users.model';

import { UserData } from '../../shared/models/user-data.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends ApiService {
  constructor(protected injector: Injector) {
    super(injector);
  }

  getUserData(): Observable<UserData> {
    return super.get<UserData>('users');
  }

  getUsers(): Observable<UserInterface[]> {
    return super.get<UserInterface[]>('users');
  }

  getAssessments(): Observable<UserAssessmentData> {
    return super.get<UserAssessmentData>('assessments');
  }

  getAssessmentsGraph(): Observable<UserAssessmentData> {
    return super.get<UserAssessmentData>('assessments/graph');
  }
}
