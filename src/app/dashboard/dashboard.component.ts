import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Observable, map } from 'rxjs';
import { User } from './pages/users/models';
import { TextUpdateService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showFiller = false;
  public authUser$: Observable<User | null>;
  currentText: string = '';

  constructor(
    private authService: AuthService,
    private textUpdateService: TextUpdateService
  ) {
    this.authUser$ = this.authService.authUser$;
    this.textUpdateService.currentText$.subscribe((text) => {
      this.currentText = text;
    });
  }

  logout(): void {
    this.authService.logOut();
  }
}
