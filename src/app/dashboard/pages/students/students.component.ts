import { Component } from '@angular/core';
import { TextUpdateService } from '../../dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from './students.service';
import { Observable } from 'rxjs';
import { Student } from './models';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  students$: Observable<Student[]>;

  studentName = '';

  constructor(
    private textUpdateService: TextUpdateService,
    private matDialog: MatDialog,
    private studentsService: StudentsService
  ) {
    this.students$ = this.studentsService.getStudents();
    this.textUpdateService.updateText('Students');
  }

  ngOnInit() {}

  addStudent(): void {
    this.matDialog
      .open(StudentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.students$ = this.studentsService.createStudent(v);
          }
        },
      });
  }

  onDeleteStudent(studentId: number) {
    this.students$ = this.studentsService.deleteStudent(studentId);
  }

  onEditStudent(student: Student): void {
    this.matDialog
      .open(StudentsDialogComponent, { data: student })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.students$ = this.studentsService.updateStudent(student.id, v);
          }
        },
      });
  }
}
