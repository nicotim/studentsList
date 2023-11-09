import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { RouterModule } from '@angular/router';
import { CoursesModule } from './pages/courses/courses.module';
import { InscriptionsModule } from './pages/inscriptions/inscriptions.module';
import { StudentsModule } from './pages/students/students.module';

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
    CoursesModule,
    InscriptionsModule,
    StudentsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
