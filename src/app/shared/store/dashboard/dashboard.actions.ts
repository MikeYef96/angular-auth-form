import { createAction, props } from '@ngrx/store';

export const getUsersRequest = createAction('[Dashboard] Get Users Request');
export const getUsersSuccess = createAction(
  '[Dashboard] Get Users Success',
  props<{ role: string }>()
);
export const getUsersError = createAction('[Dashboard] Get Users Error');
