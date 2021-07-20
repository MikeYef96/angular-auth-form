import { createSelector } from '@ngrx/store';

import { IUserData } from '../../shared/models/user-data.model';

export const selectAuthState = (state: IUserData) => state;

export const selectRole = createSelector(
  selectAuthState,
  (state) => state && state.role
);
