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

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthApiService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.hasToken() || !this.authService.hasRole()) {
      this.router.navigate(['auth/login']);
      return false;
    }

    let url: string = state.url;
    return this.checkUserRole(next, url);
  }

  checkUserRole(route: ActivatedRouteSnapshot, url: any): boolean {
    const userRole = this.authService.getRole();

    if (route.data.role.indexOf(userRole) === -1) {
      this.router.navigate(['dashboard/reports']);
      return false;
    }

    return true;
  }
}
