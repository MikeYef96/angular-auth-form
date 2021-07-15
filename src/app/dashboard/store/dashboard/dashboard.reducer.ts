import { Action, createReducer, on } from '@ngrx/store';

import * as dashboardActions from './dashboard.actions';
import { UsersInterface } from '../../model/get-users.model';

export interface IUsersState {
  users: UsersInterface[];
}

export const initialState: IUsersState = {
  users: [],
};

export function dashboardReducer(
  state: IUsersState | undefined,
  action: Action
): IUsersState {
  return reducer(state, action);
}

const reducer = createReducer<IUsersState>(
  initialState,

  on(dashboardActions.getUsersRequest, (state) => ({
    ...state,
  })),

  on(dashboardActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    users,
  }))
);
