import { Action, createReducer, on } from '@ngrx/store';

import * as dashboardActions from './dashboard.actions';
import {
  IAssessmentData,
  IUserAssessment,
  UserInterface,
} from '../../model/get-users.model';

export interface IDashboardState {
  usersList: UserInterface[];
  assessmentsList: IAssessmentData[];
  assessmentsGraph: IUserAssessment[];
}

export const initialState: IDashboardState = {
  usersList: [],
  assessmentsGraph: [],
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

  //Get Assessment Graph
  on(dashboardActions.getGraphSuccess, (state, { graph }) => ({
    ...state,
    assessmentsGraph: graph,
  }))
);
