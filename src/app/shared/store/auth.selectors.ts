import { createSelector, State } from '@ngrx/store';
import { AuthStateInterface } from '../models/state.model';

export const selectAuthState = (state: AuthStateInterface) => state;

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.auth && state.auth.userData
);
