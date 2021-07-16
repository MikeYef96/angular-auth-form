import { Action, createReducer, on } from '@ngrx/store';

import * as dashboardActions from './dashboard.actions';
import { IAssessmentData, UserInterface } from '../../model/get-users.model';

export interface IDashboardState {
  usersList: UserInterface[];
  assessmentsList: IAssessmentData[];
  // userAssessments: IDashboardAssessments[];
}

export const initialState: IDashboardState = {
  usersList: [],
  // assessments: {
  //   data: {
  //     agreeableness: 0,
  //     drive: 0,
  //     luck: 0,
  //     openess: 0,
  //   },
  //   type: 'bar',
  // },
  assessmentsList: [],
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
