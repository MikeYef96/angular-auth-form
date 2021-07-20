import { createAction, props } from '@ngrx/store';

import {
  IUserReports,
  IUserData,
  IReportsGraph,
} from '../../dashboard/model/get-users.model';

//Role Admin
export const getUsersRequest = createAction('[Dashboard] Get Users Request');
export const getUsersSuccess = createAction(
  '[Dashboard] Get Users Success',
  props<{ users: IUserData[] }>()
);
export const getUsersError = createAction('[Dashboard] Get Assessments Error');

//Role User
export const getAssessmentsRequest = createAction(
  '[Dashboard] Get Assessments Request'
);
export const getAssessmentsSuccess = createAction(
  '[Dashboard] Get Assessments Success',
  props<{ assessments: IUserReports[] }>()
);
export const getAssessmentsError = createAction(
  '[Dashboard] Get Assessments Error'
);

// Both Roles ----- Chart Actions
export const getGraphRequest = createAction(
  '[Dashboard] Get Graph Request',
  props<{ userId: number | null }>()
);
export const getGraphSuccess = createAction(
  '[Dashboard] Get Graph Success',
  props<{ graph: IReportsGraph }>()
);
export const getGraphError = createAction('[Dashboard] Get Graph Error');
