import { Action, createReducer, on } from '@ngrx/store';

import * as dashboardActions from './dashboard.actions';
import { UserAssessmentData, UserInterface } from '../../model/get-users.model';

export interface IDashboardState {
  usersList: UserInterface[];
  assessments: UserAssessmentData;
}

export const initialState: IDashboardState = {
  usersList: [],
  assessments: {
    data: {
      Agreeableness: 0,
      Drive: 0,
      Luck: 0,
      Openess: 0,
    },
    type: 'bar',
  },
};

export function dashboardReducer(
  state: IDashboardState | undefined,
  action: Action
): IDashboardState {
  return reducer(state, action);
}

const reducer = createReducer<IDashboardState>(
  initialState,

  // Get Users List

  on(dashboardActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    usersList: users,
  })),

  // Get Assessments List

  on(dashboardActions.getAssessmentsSuccess, (state, { assessments }) => ({
    ...state,
    assessmentsList: assessments,
  }))
);
