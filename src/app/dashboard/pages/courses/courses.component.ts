import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog
  ) {
    this.courses$ = this.coursesService.getCourses$();
  }

  addCourse(): void {
    this.matDialog.open(CoursesDialogComponent);
  }
}
