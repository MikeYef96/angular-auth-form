import { IUserData } from '../../shared/models/user-data.model';

export interface IAuthState {
  isAuthorized: boolean;
  userData: IUserData | null;
}
