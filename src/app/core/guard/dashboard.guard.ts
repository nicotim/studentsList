import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService
    .verifyToken()
    .pipe(
      map((isAuthenticated) =>
        isAuthenticated ? true : router.createUrlTree(['/auth'])
      )
    );
};
