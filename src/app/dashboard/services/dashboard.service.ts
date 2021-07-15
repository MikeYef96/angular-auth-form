import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersInterface } from 'src/app/dashboard/model/get-users.model';

import { UserData } from '../../shared/models/user-data.model';
import { ApiService } from '../../shared/services/api.service';
import { IUsersState } from '../store/dashboard/dashboard.reducer';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends ApiService {
  private usersStoreKey = 'users';

  private users: UsersInterface[] = [];

  constructor(protected injector: Injector) {
    super(injector);
  }

  getUserData(): Observable<UserData> {
    return super.get<UserData>('users');
  }

  getUsers(): Observable<IUsersState> {
    return super.get<IUsersState>('users');
  }

  setUsers(users: object): void {
    localStorage.setItem(this.usersStoreKey, JSON.stringify(users));
  }
}
