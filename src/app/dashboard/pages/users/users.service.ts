import { Injectable } from '@angular/core';
import { User } from './models';
import { Observable, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environments.baseUrl}/users`);
  }

  createUser(payload: User): Observable<User[]> {
    return this.httpClient
      .post<User>(`${environments.baseUrl}/users`, payload)
      .pipe(concatMap(() => this.getUsers()));
  }

  updateUser(userId: number, payload: User): Observable<User[]> {
    return this.httpClient
      .put<User>(`${environments.baseUrl}/users/${userId}`, payload)
      .pipe(concatMap(() => this.getUsers()));
  }

  deleteUser(userId: number): Observable<User[]> {
    return this.httpClient
      .delete(`${environments.baseUrl}/users/${userId}`)
      .pipe(concatMap(() => this.getUsers()));
  }
}
