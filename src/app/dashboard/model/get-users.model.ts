export interface UserInterface {
  first_name: string;
  last_name: string;
  email: string;
  groups: string[];
}

export interface IUserAssessment {
  data: IAssessmentData;
  type: string;
}

// export interface IAssessmentData {
//   agreeableness: number;
//   drive: number;
//   luck: number;
//   openess: number;
// }

export interface IAssessmentData {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}

// export interface IDashboardAssessments {
//   id: number;
//   name: string;
//   users_resolved: number;
//   active: boolean;
//   image_url: string;
// }
