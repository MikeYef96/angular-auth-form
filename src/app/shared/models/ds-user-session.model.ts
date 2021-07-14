import { UserData } from './user-data.model';

export interface DsUserSessionInterface {
  expiresAt: string;
  sessionToken: string;
  status: string;
  _embedded: {
    user: UserData;
  };
}
