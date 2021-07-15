import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/shared/models/user-data.model';

import { DsUserSessionInterface } from '../../shared/models/ds-user-session.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  private tokenStoreKey = 'token';
  private roleStoreKey = 'role';

  constructor(protected injector: Injector) {
    super(injector);
  }

  login({ email, password }: any): Observable<UserData> {
    return super.post<UserData>('login', {
      email,
      password,
    });
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenStoreKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenStoreKey);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

  setRole(role: string): void {
    localStorage.setItem(this.roleStoreKey, role);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleStoreKey);
  }

  hasRole(): boolean {
    return !!this.getRole();
  }
}
