import { Action, createReducer, on } from '@ngrx/store';

import * as authActions from './auth.actions';
import { AuthStateInterface } from '../../model/state.model';

export const initState: AuthStateInterface = {
  isAuthorized: false,
  userData: null,
};

export function authReducer(
  state: AuthStateInterface | undefined,
  action: Action
): AuthStateInterface {
  return reducer(state, action);
}

const reducer = createReducer<AuthStateInterface>(
  initState,

  on(authActions.signInRequest, (state) => ({
    ...state,
    isAuthorized: true,
  })),

  on(authActions.signInSuccess, (state, user) => ({
    ...state,
    userData: user,
    isAuthorized: false,
  })),

  on(authActions.signInError, (state) => ({
    ...state,
    isAuthorized: false,
  }))
);
