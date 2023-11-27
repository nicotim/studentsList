import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogueComponent } from './components/users-dialogue/users-dialogue.component';
import { User } from './models';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { TextUpdateService } from '../../dashboard.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users$: Observable<User[]>;

  userName = '';

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService,
    private textUpdateService: TextUpdateService
  ) {
    this.users$ = this.usersService.getUsers();
  }

  ngOnInit() {
    this.textUpdateService.updateText('Usuarios');
  }

  addUser(): void {
    this.matDialog
      .open(UsersDialogueComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users$ = this.usersService.createUser(v);
          }
        },
      });
  }

  onDeleteUser(userId: number) {
    this.users$ = this.usersService.deleteUser(userId);
  }

  onEditUser(user: User): void {
    this.matDialog
      .open(UsersDialogueComponent, { data: user })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users$ = this.usersService.updateUser(user.id, v);
          }
        },
      });
  }
}
