import { Action, createReducer, on } from '@ngrx/store';

import * as authActions from './auth.actions';
import { IAuthState } from '../model/auth-state.model';

export const initState: IAuthState = {
  isAuthorized: false,
  userData: null,
};

export function authReducer(
  state: IAuthState | undefined,
  action: Action
): IAuthState {
  return reducer(state, action);
}

const reducer = createReducer<IAuthState>(
  initState,

  on(authActions.signInSuccess, (state, user) => ({
    ...state,
    userData: user,
    isAuthorized: true,
  })),

  on(authActions.signInError, (state) => ({
    ...state,
    isAuthorized: false,
  }))
);
