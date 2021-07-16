import { UserData } from '../../shared/models/user-data.model';

export interface AuthStateInterface {
  isAuthorized: boolean;
  userData: UserData | null;
}
