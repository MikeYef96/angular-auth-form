import { IUserReports, IUserData, IReportsGraph } from './get-users.model';

export interface IDashboardState {
  usersList: IUserData[];
  assessmentsList: IUserReports[];
  assessmentsGraph: IReportsGraph | null;
}
