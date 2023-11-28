export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  token: string;
  role: 'ADMIN' | 'EMPLOYEE';
  password: string;
}
