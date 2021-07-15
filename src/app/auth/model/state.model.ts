import { UserData } from '../../shared/models/user-data.model';

export interface AuthStateInterface {
  auth: {
    authorization: boolean;
    userData: UserData | null;
  };
}
