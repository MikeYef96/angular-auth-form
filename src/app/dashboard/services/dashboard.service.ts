import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/dashboard/model/get-users.model';

import { UserData } from '../../shared/models/user-data.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends ApiService {
  private usersStoreKey = 'users';

  private users: UserInterface[] = [];

  constructor(protected injector: Injector) {
    super(injector);
  }

  getUserData(): Observable<UserData> {
    return super.get<UserData>('users');
  }

  getUsers(): Observable<UserInterface[]> {
    return super.get<UserInterface[]>('users');
  }

  setUsers(users: object): void {
    localStorage.setItem(this.usersStoreKey, JSON.stringify(users));
  }
}
