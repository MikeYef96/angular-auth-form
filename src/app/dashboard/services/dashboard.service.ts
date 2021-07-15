import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { UserData } from '../../shared/models/user-data.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends ApiService {
  private roleStoreKey = 'role';

  constructor(protected injector: Injector) {
    super(injector);
  }

  getUserData(): Observable<UserData> {
    return super.get<UserData>('users');
  }

  setRole(role: string): void {
    localStorage.setItem(this.roleStoreKey, role);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleStoreKey);
  }
}
