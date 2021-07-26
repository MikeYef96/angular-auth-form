import { Injectable } from '@angular/core';
import {AuthApiService} from "./auth-api.service";
import {Router} from "@angular/router";

import {LocalStorageService} from "../../shared/services/local-storage.service";
import {IUserData} from "../../shared/models/user-data.model";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(
    private authService: AuthApiService,
    private router: Router,
    public localStorageService: LocalStorageService,
  ) { }

  setSignIn({ email, password }: any): void {
    this.authService
      .login({ email, password })
      .subscribe((data: IUserData) => {
        this.localStorageService.setToken(data.token);
        this.localStorageService.setRole(data.role);

        this.localStorageService.initState.isAuthorized = true;

        this.router.navigate(['/dashboard/reports']);
      });
  }
}
