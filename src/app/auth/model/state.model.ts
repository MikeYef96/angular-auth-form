import { IUserData } from '../../shared/models/user-data.model';

export interface AuthStateInterface {
  isAuthorized: boolean;
  userData: IUserData | null;
}
