export type UserRole = 'ADMIN' | 'EMPLOYEE';

export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  token: string;
  role: UserRole;
  password: string;
}
