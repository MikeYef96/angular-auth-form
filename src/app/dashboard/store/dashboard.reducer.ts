import { Action, createReducer, on } from '@ngrx/store';

import * as dashboardActions from './dashboard.actions';
import {
  IUserReports,
  IReportsGraph,
  IUserData,
} from '../model/get-users.model';

export interface IDashboardState {
  usersList: IUserData[];
  assessmentsList: IUserReports[];
  assessmentsGraph: IReportsGraph | null;
}

export const initialState: IDashboardState = {
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
  })),

  //Get Assessments(Reports) Graph

  on(dashboardActions.getGraphSuccess, (state, { graph }) => ({
    ...state,
    assessmentsGraph: graph,
  }))
);
