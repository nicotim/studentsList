import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDialogueComponent } from './components/users-dialogue/users-dialogue.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent, UsersDialogueComponent, UsersTableComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  exports: [UsersComponent],
})
export class UsersModule {}
