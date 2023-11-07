import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    SharedModule,
    MatToolbarModule,
    UsersModule,
    HomeModule,
    RouterModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
