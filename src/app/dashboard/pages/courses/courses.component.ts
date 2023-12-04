import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { TextUpdateService } from '../../dashboard.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

  course = '';

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog,
    private textUpdateService: TextUpdateService
  ) {
    this.courses$ = this.coursesService.getCourses();
    this.textUpdateService.updateText('Cursos');
  }

  ngOnInit() {}

  addCourse(): void {
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.courses$ = this.coursesService.createCourse(v);
          }
        },
      });
  }

  onDeleteCourse(courseId: number): void {
    this.courses$ = this.coursesService.deleteCourse(courseId);
  }

  onEditCourse(course: Course): void {
    this.matDialog
      .open(CoursesDialogComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.courses$ = this.coursesService.editCourse(course.id, v);
          }
        },
      });
  }
}
