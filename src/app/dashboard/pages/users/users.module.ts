import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDialogueComponent } from './components/users-dialogue/users-dialogue.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogueComponent,
    UsersTableComponent,
    UserDetailComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [UsersComponent],
})
export class UsersModule {}
