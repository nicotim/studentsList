import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environments } from 'src/environments/environment.local';
import { loginPayload } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUser = new BehaviorSubject<User | null>(null);

  public authUser$ = this._authUser.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(payload: loginPayload): void {
    this.httpClient
      .get<User[]>(
        `${environments.baseUrl}/users?email=${payload.email}&password=${payload.password}`
      )
      .subscribe({
        next: (response) => {
          if (!response.length) {
            alert('Email o Contraseña invalidos');
          } else {
            const authUser = response[0];
            this._authUser.next(authUser);
            localStorage.setItem('token', authUser.token);
            this.router.navigate(['/dashboard/home']);
          }
        },
      });
  }

  logOut(): void {
    this._authUser.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `${environments.baseUrl}/users?token${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this._authUser.next(authUser);
            localStorage.setItem('token', authUser.token);
            return true;
          }
        })
      );
  }
}
