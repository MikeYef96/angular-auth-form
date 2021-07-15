import { Action, createReducer, on } from '@ngrx/store';

import * as authActions from './auth.actions';
import { AuthStateInterface } from '../../models/state.model';

export const initState: AuthStateInterface = {
  auth: {
    authorization: false,
    userData: null,
  },
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
    authorization: true,
  })),

  on(authActions.signInSuccess, (state, user) => ({
    ...state,
    userData: user,
    authorization: false,
  })),

  on(authActions.signInError, (state) => ({
    ...state,
    authorization: false,
  })),

  on(authActions.signUpRequest, (state) => ({
    ...state,
    authorization: true,
  })),

  on(authActions.signUpSuccess, (state) => ({
    ...state,
    authorization: false,
  })),

  on(authActions.signUpError, (state) => ({
    ...state,
    authorization: false,
  }))
);
