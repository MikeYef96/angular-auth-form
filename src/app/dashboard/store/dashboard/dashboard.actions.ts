import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../../dashboard/model/get-users.model';

export const getUsersRequest = createAction('[Dashboard] Get Users Request');
export const getUsersSuccess = createAction(
  '[Dashboard] Get Users Success',
  props<{ users: UserInterface[] }>()
);
export const getUsersError = createAction('[Dashboard] Get Users Error');
