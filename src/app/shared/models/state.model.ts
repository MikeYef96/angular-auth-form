import { UserData } from './user-data.model';

export interface AuthStateInterface {
  auth: {
    authorization: boolean;
    userData: UserData | null;
  };
}
