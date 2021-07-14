import { Injectable, Injector } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

import { DsUserSessionInterface } from '../../shared/models/ds-user-session.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  private tokenStoreKey = 'token';

  constructor(protected injector: Injector) {
    super(injector);
  }

  login({ email, password }: any): Observable<DsUserSessionInterface> {
    return super.post<DsUserSessionInterface>('login', {
      email,
      password,
    });
  }

  register({ name, email, password }: any): Observable<any> {
    return super.post<DsUserSessionInterface>('register', {
      name,
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
}
