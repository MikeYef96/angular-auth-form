import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthApiService } from '../../auth/services/auth-api.service';
import {LocalStorageService} from "../services/local-storage.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public localStorageService: LocalStorageService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.localStorageService.hasToken() || !this.localStorageService.hasRole()) {
      this.router.navigate(['auth/login']);
      return false;
    }

    let url: string = state.url;
    return this.checkUserRole(next, url);
  }

  checkUserRole(route: ActivatedRouteSnapshot, url: any): boolean {
    const userRole = this.localStorageService.getRole();

    if (route.data.role.indexOf(userRole) === -1) {
      this.router.navigate(['dashboard/reports']);
      return false;
    }

    return true;
  }
}
