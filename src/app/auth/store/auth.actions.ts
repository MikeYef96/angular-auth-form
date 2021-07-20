import { createAction, props } from '@ngrx/store';

import { IUserData } from '../../shared/models/user-data.model';

export const signInRequest = createAction(
  '[Auth] Sign In Request',
  props<{ email: string; password: string }>()
);
export const signInSuccess = createAction(
  '[Auth] Sign In Success',
  props<IUserData>()
);
export const signInError = createAction('[Auth] Sign In Error');
