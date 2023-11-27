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

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog,
    private textUpdateService: TextUpdateService
  ) {
    this.courses$ = this.coursesService.getCourses$();
  }

  ngOnInit() {
    this.textUpdateService.updateText('Cursos');
  }

  addCourse(): void {
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.courses$ = this.coursesService.createCourse$({
              id: Date.now(),
              name: result.name,
              startDate: result.startDate,
              endDate: result.endDate,
            });
          }
        },
      });
  }

  onDeleteCourse(courseId: number): void {
    this.courses$ = this.coursesService.deleteCourse$(courseId);
  }

  onEditCourse(courseID: number): void {
    this.matDialog
      .open(CoursesDialogComponent, {
        data: courseID,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.courses$ = this.coursesService.editCourse$(courseID, result);
          }
        },
      });
  }
}
