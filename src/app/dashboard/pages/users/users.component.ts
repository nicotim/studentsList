import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogueComponent } from './components/users-dialogue/users-dialogue.component';
import { User } from './models';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: User[] = [];

  userName = '';

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService
  ) {
    this.usersService.loadUsers();
    this.usersService.getUsers().subscribe({
      next: (v) => {
        this.users = v;
      },
    });
  }

  openUsersDialog(): void {
    this.matDialog
      .open(UsersDialogueComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users = [
              ...this.users,
              {
                ...v,
                id: this.users.length + 1,
              },
            ];
          }
        },
      });
  }

  onDeleteUser(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  onEditUser(user: User): void {
    this.matDialog
      .open(UsersDialogueComponent, { data: user })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users = this.users.map((u) =>
              u.id === user.id ? { ...u, ...v } : u
            );
          }
        },
      });
  }
}
