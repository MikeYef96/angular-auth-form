export interface UserInterface {
  first_name: string;
  last_name: string;
  email: string;
  groups: string[];
}

export interface UserAssessmentData {
  data: {
    Agreeableness: number;
    Drive: number;
    Luck: number;
    Openess: number;
  };
  type: string;
}
