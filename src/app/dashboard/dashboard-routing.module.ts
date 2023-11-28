import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StudentsComponent } from './pages/students/students.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { CoursesModule } from './pages/courses/courses.module';
import { AdminGuard } from '../core/guard/admin.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./pages/home/home.module').then((m) => m.HomeModule),
          },
          {
            path: 'users',
            canActivate: [AdminGuard],
            loadChildren: () =>
              import('./pages/users/users.module').then((m) => m.UsersModule),
          },
          {
            path: 'courses',
            loadChildren: () =>
              import('./pages/courses/courses.module').then(
                (m) => m.CoursesModule
              ),
          },
          {
            path: 'inscriptions',
            loadChildren: () =>
              import('./pages/inscriptions/inscriptions.module').then(
                (m) => m.InscriptionsModule
              ),
          },
          {
            path: 'students',
            loadChildren: () =>
              import('./pages/students/students.module').then(
                (m) => m.StudentsModule
              ),
          },
          {
            path: '**',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
