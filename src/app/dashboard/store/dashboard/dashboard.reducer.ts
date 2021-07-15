import { Action, createReducer, on } from '@ngrx/store';

import * as dashboardActions from './dashboard.actions';
import { UserInterface } from '../../model/get-users.model';

export interface IDashboardState {
  usersList: UserInterface[];
}

export const initialState: IDashboardState = {
  usersList: []
};

export function dashboardReducer(state: IDashboardState | undefined, action: Action): IDashboardState {
  return reducer(state, action);
}

const reducer = createReducer<IDashboardState>(
  initialState,

  // Get Users List

  on(dashboardActions.getUsersSuccess, (state, { users }) => ({
      ...state,
      usersList: users
    })
  )
)
