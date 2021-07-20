import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { IUserData } from 'src/app/shared/models/user-data.model';
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

  login({ email, password }: any): Observable<IUserData> {
    return super.post<IUserData>('login', {
      email,
      password,
    });
  }

  clearLocalStorage(): void {
    localStorage.clear();
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
