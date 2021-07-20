import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import * as dashboardActions from './dashboard.actions';
import { DashboardService } from '../../dashboard/services/dashboard.service';
import { IUserData } from '../model/get-users.model';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
    private toastr: ToastrService
  ) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardActions.getUsersRequest),
      switchMap(() => {
        return this.dashboardService.getUsers().pipe(
          map((users: IUserData[]) =>
            dashboardActions.getUsersSuccess({ users })
          ),
          catchError((error) => {
            this.toastr.error('Oops, login failed');
            return of(dashboardActions.getUsersError());
          })
        );
      })
    )
  );

  getAssessments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardActions.getAssessmentsRequest),
      switchMap(() => {
        return this.dashboardService.getAssessments().pipe(
          map((assessments) =>
            dashboardActions.getAssessmentsSuccess({ assessments })
          ),
          catchError((error) => {
            this.toastr.error('Oops, get users failed');
            return of(dashboardActions.getAssessmentsError());
          })
        );
      })
    )
  );

  getAssessmentsGraph$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardActions.getGraphRequest),
      switchMap(({ userId }) => {
        return this.dashboardService.getAssessmentsGraph(userId).pipe(
          map((graph) => {
            return dashboardActions.getGraphSuccess({ graph });
          }),
          catchError((error) => {
            this.toastr.error('Oops, get reports failed');
            return of(dashboardActions.getGraphError());
          })
        );
      })
    )
  );
}
