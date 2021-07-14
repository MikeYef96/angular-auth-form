import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import * as authActions from './auth.actions';
import { AuthService } from '../../core/services/auth.service';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signInRequest),
      switchMap(({ email, password }) => {
        return this.authService.login({ email, password }).pipe(
          map((userSession) => {
            this.ngZone.run(() => {
              this.authService.setToken(userSession.sessionToken);
              this.router.navigate(['/users']); //home page with users
            });

            return authActions.signInSuccess(userSession._embedded);
          }),
          catchError((error) => {
            this.toastr.error('Oops, login failed');
            return of(authActions.signInError());
          })
        );
      })
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signUpRequest),
      switchMap(({ name, email, password }) => {
        return this.authService.register({ name, email, password }).pipe(
          map(() => authActions.signUpSuccess()),
          catchError((error) => {
            this.toastr.error('Oops, register failed');
            return of(authActions.signUpError());
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
    private store: Store,
    private ngZone: NgZone
  ) {}
}
