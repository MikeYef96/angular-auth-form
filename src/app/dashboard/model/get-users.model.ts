export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  groups: string[];
}

export interface IUserAssessment {
  id: number;
  data: IAssessmentGraphData[];
  type: string;
}

export interface IAssessmentGraphData {
  agreeableness: number;
  drive: number;
  luck: number;
  openess: number;
}

export interface IAssessmentData {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
