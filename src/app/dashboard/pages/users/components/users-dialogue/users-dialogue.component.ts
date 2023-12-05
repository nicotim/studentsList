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
  showPassword: boolean = false;

  passwordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

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

  generateToken(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let token = '';
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * characters.length);
      token += characters[randomNumber];
    }
    return token;
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
      const formData = this.userForm.value;
      formData.token = this.generateToken(8);
      this.matDialogRef.close(formData);
    }
  }

  listOfRoles() {
    this.roles = Array.from(new Set(this.users.map((user) => user.role)));
  }
}
