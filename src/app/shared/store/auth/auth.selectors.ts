import { createSelector, State } from '@ngrx/store';
import { AuthStateInterface } from '../../models/state.model';
import { UserData } from '../../models/user-data.model';

export const selectAuthState = (state: UserData) => state;

export const selectUser = createSelector(
  selectAuthState,
  (state) => state && state.role === 'User'
);

export const selectAdmin = createSelector(
  selectAuthState,
  (state) => state && state.role === 'Admin'
);
