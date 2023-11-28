import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environments } from 'src/environments/environment.local';
import { loginPayload } from '../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from 'src/app/store/auth/auth.actions';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authUser$ = this.store.select(selectAuthUser);

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  private handleAuthUser(authUser: User): void {
    this.store.dispatch(authActions.setAuthUser({ data: authUser }));
    localStorage.setItem('token', authUser.token);
  }

  login(payload: loginPayload): void {
    this.httpClient
      .get<User[]>(
        `${environments.baseUrl}/users?email=${payload.email}&password=${payload.password}`
      )
      .subscribe({
        next: (response) => {
          const authUser = response[0];

          if (!authUser) {
            alert('Usuario o contrasena invalidos');
          } else {
            this.handleAuthUser(authUser);
            this.router.navigate(['/dashboard/home']);
          }
        },
        error: (err) => {
          alert('Error de conexion');
        },
      });
  }

  verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `${environments.baseUrl}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this.handleAuthUser(authUser);
            return true;
          }
        })
      );
  }

  logOut(): void {
    this.store.dispatch(authActions.resetState());
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
