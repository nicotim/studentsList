import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User, UserRole } from '../../models';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-dialogue',
  templateUrl: './users-dialogue.component.html',
  styleUrls: ['./users-dialogue.component.scss'],
})
export class UsersDialogueComponent {
  userForm: FormGroup;
  users: User[] = [];
  roles: UserRole[] = [];

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UsersDialogueComponent>,
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public user?: User
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      role: [null, Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [Validators.required, Validators.pattern('([a-zA-Z ]*).{8,}')],
      ],
    });

    this.fetchUsers();
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.listOfRoles();
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
  }

  listOfRoles() {
    this.roles = Array.from(new Set(this.users.map((user) => user.role)));
  }
}
