import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Course } from '../../models';
import { formatDate } from '@angular/common';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss'],
})
export class CoursesDialogComponent {
  minDate: Date;
  courseForm: FormGroup;
  courses: Course[] = [];
  teachers: string[] = [];

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) public course?: Course
  ) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      teacher: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });

    this.minDate = new Date();
    this.fetchCourses();
    if (this.course) {
      this.courseForm.patchValue(this.course);
    }
  }

  fetchCourses() {
    this.coursesService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
      this.listOfTeachers();
    });
  }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
    } else {
      const startDate = this.courseForm.get('startDate')?.value;
      const endDate = this.courseForm.get('endDate')?.value;

      if (startDate && endDate) {
        const formattedStartDate = formatDate(startDate, 'MM-dd-yyyy', 'en-US');
        const formattedEndDate = formatDate(endDate, 'MM-dd-yyyy', 'en-US');

        const modifiedValue = {
          name: this.courseForm.get('name')?.value,
          teacher: this.courseForm.get('teacher')?.value,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        };

        this.matDialogRef.close(modifiedValue);
      } else {
        console.error('Choose a date.');
      }
    }
  }

  listOfTeachers() {
    this.teachers = Array.from(
      new Set(this.courses.map((course) => course.teacher))
    );
  }
}
