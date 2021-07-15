import { createSelector, State } from '@ngrx/store';
import { UserData } from '../../models/user-data.model';

export const selectAuthState = (state: UserData) => state;

export const selectUser = createSelector(selectAuthState, (state) => {
  return state.role;
});

export const selectAdmin = createSelector(selectAuthState, (state) => {
  return state.role;
});
