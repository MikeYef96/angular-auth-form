import { createAction, props } from '@ngrx/store';
import {
  IAssessmentData,
  IAssessmentGraphData,
  IUserAssessment,
  UserInterface,
} from '../../../dashboard/model/get-users.model';

//Role Admin
export const getUsersRequest = createAction('[Dashboard] Get Users Request');
export const getUsersSuccess = createAction(
  '[Dashboard] Get Users Success',
  props<{ users: UserInterface[] }>()
);
export const getUsersError = createAction('[Dashboard] Get Assessments Error');

//Role User
export const getAssessmentsRequest = createAction(
  '[Dashboard] Get Assessments Request'
);
export const getAssessmentsSuccess = createAction(
  '[Dashboard] Get Assessments Success',
  props<{ assessments: IAssessmentData[] }>()
);
export const getAssessmentsError = createAction(
  '[Dashboard] Get Assessments Error'
);

export const getGraphRequest = createAction('[Dashboard] Get Graph Request');
export const getGraphSuccess = createAction(
  '[Dashboard] Get Graph Success',
  props<{ graph: IUserAssessment[] }>()
);
export const getGraphError = createAction('[Dashboard] Get Graph Error');
