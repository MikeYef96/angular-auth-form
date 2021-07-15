import { createSelector } from '@ngrx/store';
import { UserData } from '../../../shared/models/user-data.model';

export const selectAuthState = (state: UserData) => state;

export const selectRole = createSelector(
  selectAuthState,
  (state) => state && state.role
);
