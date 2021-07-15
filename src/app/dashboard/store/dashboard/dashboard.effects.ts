import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';

import * as dashboardActions from './dashboard.actions';
import { DashboardService } from '../../../dashboard/services/dashboard.service';
import { Router } from '@angular/router';

@Injectable()
export class DashboardEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardActions.getUsersRequest),
      switchMap(() => {
        return this.dashboardService.getUsers().pipe(
          map((user) => {
            this.ngZone.run(() => {
              this.dashboardService.setUsers(user);
              this.router.navigate(['/users']);
            });

            return dashboardActions.getUsersSuccess(user);
          }),
          catchError((error) => {
            this.toastr.error('Oops, login failed');
            return of(dashboardActions.getUsersError());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
    private toastr: ToastrService,
    private ngZone: NgZone,
    private router: Router
  ) {}
}
