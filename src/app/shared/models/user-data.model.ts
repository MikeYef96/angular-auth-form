export interface UserData {
  id: string;
  profile: {
    login: string;
    firstName: string;
    lastName: string;
    locale: string;
    timeZone: string;
  };
}
