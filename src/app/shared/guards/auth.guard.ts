import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.hasToken() || !this.authService.hasRole()) {
      this.router.navigate(['login']);
      return false;
    }

    let url: string = state.url;
    return this.checkUserRole(next, url);
  }

  checkUserRole(route: ActivatedRouteSnapshot, url: any): boolean {
    const userRole = this.authService.getRole();

    if (route.data.role.indexOf(userRole) === -1) {
      this.router.navigate(['dashboard/userassessments']);
      return false;
    }

    return true;
  }
}
