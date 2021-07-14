import { createAction, props } from '@ngrx/store';
import { UserData } from '../models/user-data.model';

export const signInRequest = createAction(
  '[Auth] Sign In Request',
  props<{ email: string; password: string }>()
);
export const signInSuccess = createAction(
  '[Auth] Sign In Success',
  props<{ user: UserData }>()
);
export const signInError = createAction('[Auth] Sign In Error');

export const signUpRequest = createAction(
  '[Auth Form] Sign Up Request',
  props<{ name: string; email: string; password: string }>()
);
export const signUpSuccess = createAction('[Auth API] Sign Up Success');
export const signUpError = createAction('[Auth API] Sign Up Error');
