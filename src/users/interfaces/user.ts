export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  User = 0,
  Admin = 1,
}
