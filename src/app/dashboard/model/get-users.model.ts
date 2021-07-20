export interface IUserData {
  first_name: string;
  last_name: string;
  email: string;
  groups: string[];
}

export interface IReportsGraph {
  id: number;
  data: IGraphData;
  type: string;
}

export interface IGraphData {
  agreeableness: number;
  drive: number;
  luck: number;
  openess: number;
}

export interface IUserReports {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}
