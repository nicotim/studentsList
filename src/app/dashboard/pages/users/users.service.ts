import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Manuel',
        lastname: 'Jose',
        email: 'ingo@gmail.com',
      },
      {
        id: 2,
        name: 'Antonella',
        lastname: 'Paz',
        email: 'Anto@gmail.com',
      },
      {
        id: 3,
        name: 'Nicolas',
        lastname: 'Wan',
        email: 'Wan2@gmail.com',
      },
    ];
  }
}
