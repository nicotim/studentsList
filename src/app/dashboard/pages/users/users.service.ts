import { Injectable } from '@angular/core';
import { User } from './models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  private users: User[] = [
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

  private users$ = new BehaviorSubject<User[]>([]);

  loadUsers(): void {
    this.users$.next(this.users);
  }

  getUsers(): Subject<User[]> {
    return this.users$;
  }
}
