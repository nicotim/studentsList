import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Course } from '../../models';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss'],
})
export class CoursesDialogComponent {
  minDate: Date;
  courseForm: FormGroup;
  teachers = ['Martin', 'Dante'];

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public course?: Course
  ) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      teacher: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });

    this.minDate = new Date();

    if (this.course) {
      this.courseForm.patchValue(this.course);
    }
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
        console.error('Falta elegir alguna fecha.');
      }
    }
  }
}
