import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

  constructor(private router: Router) {}

  goToDetail(userId: number): void {
    this.router.navigate(['dashboard', 'users', 'detail', userId]);
  }
}
