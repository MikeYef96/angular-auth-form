import { createSelector } from '@ngrx/store';

export const selectDashboardState = (state: any) => state;

export const selectAllUsers = createSelector(
  selectDashboardState,
  state => state.users.usersList
);
