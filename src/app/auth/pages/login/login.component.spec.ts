import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, SharedModule, StoreModule],
      providers: [provideMockStore({})],
    });

    loginComponent = TestBed.createComponent(LoginComponent).componentInstance;
  });

  it('should create login component', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('should mark as touched if fields are invalid', () => {
    loginComponent.loginForm.patchValue({
      email: 'afasfasfasf',
      password: '1133',
    });
    loginComponent.login();
    expect(loginComponent.emailControl.touched).toBeTrue();
    expect(loginComponent.passwordControl.touched).toBeTrue();
  });

  it('should call AuthService if fields are valid', () => {
    loginComponent.loginForm.patchValue({
      email: 'fakemail@gmail.com',
      password: '123456',
    });
    const spyOnAuthServiceLogin = spyOn(
      (loginComponent as any).authService,
      'login'
    );
    loginComponent.login();
    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
});
