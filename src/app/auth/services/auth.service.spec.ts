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

describe('AuthService', () => {
  let authService: AuthService;
  let httpControler: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MockProvider(Router)],
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
      email: 'fakemail@mail.com',
      role: 'Admin',
      token: 'asafaffaffsasffaf',
      password: '1236',
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
