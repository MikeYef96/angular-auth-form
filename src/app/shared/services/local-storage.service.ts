import { Injectable } from '@angular/core';
import {IAuthState} from "../../auth/model/auth-state.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  initState: IAuthState = {
    isAuthorized: false,
    userData: null,
  };

  private tokenStoreKey = 'token';
  private roleStoreKey = 'role';

  constructor() { }

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
