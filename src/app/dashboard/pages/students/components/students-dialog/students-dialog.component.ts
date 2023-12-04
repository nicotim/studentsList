import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss',
})
export class StudentsDialogComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public student?: Student
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });

    if (this.student) {
      this.studentForm.patchValue(this.student);
    }
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentForm.value);
    }
  }
}
