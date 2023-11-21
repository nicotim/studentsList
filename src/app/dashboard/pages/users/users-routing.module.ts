import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class UsersRoutingModule {}
