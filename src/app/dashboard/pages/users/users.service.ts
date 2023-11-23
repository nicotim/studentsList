import { Injectable } from '@angular/core';
import { User } from './models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  private users: User[] = [];

  private users$ = new BehaviorSubject<User[]>([]);

  loadUsers(): void {
    this.users$.next(this.users);
  }

  getUsers(): Subject<User[]> {
    return this.users$;
  }
}
