import { createSelector, State } from '@ngrx/store';
// import { UserData } from '../../models/user-data.model';
import { UsersInterface } from '../../model/get-users.model';
import { IUsersState } from './dashboard.reducer';

export const selectDashboardState = (state: IUsersState) => state;

export const selectAllUsers = createSelector(
  selectDashboardState,
  (state) => state.users
);
