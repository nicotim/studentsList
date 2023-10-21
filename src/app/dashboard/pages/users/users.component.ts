import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogueComponent } from './components/users-dialogue/users-dialogue.component';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Manuel',
      lastname: 'Jose',
      email: 'ingo@gmail.com',
    },
    {
      id: 2,
      name: 'Antonella',
      lastname: 'Paz',
      email: 'Anto@gmail.com',
    },
    {
      id: 3,
      name: 'Nicolas',
      lastname: 'Wan',
      email: 'Wan2@gmail.com',
    },
  ];

  userName = '';

  constructor(private matDialog: MatDialog) {}

  openUsersDialog(): void {
    this.matDialog
      .open(UsersDialogueComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          console.log(v);
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
