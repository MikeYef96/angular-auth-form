import type { ChartType } from 'chart.js';

export interface IUserData {
  first_name: string;
  last_name: string;
  email: string;
  groups: string[];
}

export interface IReportsGraph {
  id: number;
  data: IGraphData;
  type: ChartType;
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
