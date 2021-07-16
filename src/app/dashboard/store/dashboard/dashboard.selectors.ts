import { createSelector } from '@ngrx/store';

export const selectDashboardState = (state: any) => state;

export const selectAllUsers = createSelector(
  selectDashboardState,
  (state) => state.dashboard.usersList
);

export const selectAllAssessments = createSelector(
  selectDashboardState,
  (state) => state.dashboard.assessmentsList
);

export const selectAllAssessmentsGraph = createSelector(
  selectDashboardState,
  (state) => state.dashboard.assessmentsGraph
);
