import { Action, createReducer, on } from '@ngrx/store';

import * as dashboardActions from './dashboard.actions';
import {
  IUserReports,
  IReportsGraph,
  IUserData,
} from '../model/get-users.model';
import { IDashboardState } from '../model/dashboard-state.model';

export const initState: IDashboardState = {
  usersList: [],
  assessmentsGraph: null,
  assessmentsList: [],
};

export function dashboardReducer(
  state: IDashboardState | undefined,
  action: Action
): IDashboardState {
  return reducer(state, action);
}

const reducer = createReducer<IDashboardState>(
  initState,

  // Get Users List

  on(dashboardActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    usersList: users,
  })),

  // Get Assessments List

  on(dashboardActions.getAssessmentsSuccess, (state, { assessments }) => ({
    ...state,
    assessmentsList: assessments,
  })),

  //Get Assessments(Reports) Graph

  on(dashboardActions.getGraphSuccess, (state, { graph }) => ({
    ...state,
    assessmentsGraph: graph,
  }))
);
