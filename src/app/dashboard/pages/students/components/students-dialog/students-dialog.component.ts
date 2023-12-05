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

  countries = [
    'Argentina',
    'Belice',
    'Bolivia',
    'Brasil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Dominica',
    'Ecuador',
    'El Salvador',
    'Granada',
    'Guatemala',
    'Guyana',
    'Haití',
    'Honduras',
    'Jamaica',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'República Dominicana',
    'San Cristóbal y Nieves',
    'San Vicente y las Granadinas',
    'Santa Lucía',
    'Surinam',
    'Trinidad y Tobago',
    'Uruguay',
    'Venezuela',
  ];

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public student?: Student
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      country: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    if (this.student) {
      this.studentForm.patchValue(this.student);
    }
  }

  markFieldAsTouched(field: string) {
    const control = this.studentForm.get(field);
    if (control && !control.touched) {
      control.markAsTouched();
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
