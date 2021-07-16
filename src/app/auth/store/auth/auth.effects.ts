import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import * as authActions from './auth.actions';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signInRequest),
      switchMap(({ email, password }) => {
        return this.authService.login({ email, password }).pipe(
          map((userSession) => {
            this.ngZone.run(() => {
              this.authService.setToken(userSession.token);
              this.authService.setRole(userSession.role);

              // userSession.role === 'Admin'
              //   ? this.router.navigate(['/users'])
              //   :

              this.router.navigate(['/dashboard/userassessments']);
            });

            return authActions.signInSuccess(userSession);
          }),
          catchError((error) => {
            this.toastr.error('Oops, login failed');
            return of(authActions.signInError());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private ngZone: NgZone
  ) {}
}
