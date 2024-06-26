import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(selectAuthUser).pipe(
      map((user) => {
        if (user?.role !== 'ADMIN') {
          alert('You are not allowed to get this information.');
          return this.router.createUrlTree(['/dashboard/home']);
        } else {
          return true;
        }
      })
    );
  }
}
