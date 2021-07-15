import { createAction, props } from '@ngrx/store';
import { UsersInterface } from '../../../dashboard/model/get-users.model';

export const getUsersRequest = createAction('[Dashboard] Get Users Request');
export const getUsersSuccess = createAction(
  '[Dashboard] Get Users Success',
  props<{ users: UsersInterface[] }>()
);
export const getUsersError = createAction('[Dashboard] Get Users Error');
