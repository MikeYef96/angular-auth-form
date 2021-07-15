export interface UsersInterface {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}

export interface GetUsersInterface {
  users: {
    user: UsersInterface;
  };
}
