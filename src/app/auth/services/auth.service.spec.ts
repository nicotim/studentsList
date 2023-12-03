import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { User } from 'src/app/dashboard/pages/users/models';
import { MockProvider } from 'ng-mocks';
import { Router } from '@angular/router';
import { environments } from 'src/environments/environment.local';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { State } from 'src/app/store/auth/auth.reducer';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

describe('AuthService', () => {
  let authService: AuthService;
  let httpControler: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, StoreModule],
      providers: [
        MockProvider(Router),
        provideMockStore<State>({
          initialState: {
            authUser: null,
          },
          selectors: [
            {
              selector: selectAuthUser,
              value: {
                id: 1,
                name: 'Nico',
                lastname: 'tim',
                email: 'fake@mail.com',
                role: 'ADMIN',
                token: 'asafaffaffsasffaf',
                password: '123456',
              },
            },
          ],
        }),
      ],
    });

    authService = TestBed.inject(AuthService);
    httpControler = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpControler.verify();
  });

  it('AuthService should be defined', () => {
    expect(authService).toBeTruthy();
  });

  it('login should establish an authentified user', () => {
    const USER_MOCK: User = {
      id: 1,
      name: 'Nico',
      lastname: 'tim',
      email: 'fake@mail.com',
      role: 'ADMIN',
      token: 'asafaffaffsasffaf',
      password: '123456',
    };

    authService.login({
      email: USER_MOCK.email,
      password: USER_MOCK.password,
    });

    httpControler
      .expectOne({
        method: 'GET',
        url: `${environments.baseUrl}/users?email=${USER_MOCK.email}&password=${USER_MOCK.password}`,
      })
      .flush([USER_MOCK]);

    authService.authUser$.subscribe({
      next: (authUser) => {
        expect(authUser).toBeTruthy();
        expect(authUser).toEqual(USER_MOCK);
      },
    });
  });
});
