import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable, Input, NgZone } from '@angular/core';

import * as dashboardActions from './dashboard.actions';
import { DashboardService } from '../../dashboard/services/dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IAssessmentData } from '../model/get-users.model';

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
          map((users) => dashboardActions.getUsersSuccess({ users })),
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
      switchMap(() => {
        const id = 1;
        return this.dashboardService.getAssessmentsGraph(id).pipe(
          map((graph) => {
            console.log(graph);
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
