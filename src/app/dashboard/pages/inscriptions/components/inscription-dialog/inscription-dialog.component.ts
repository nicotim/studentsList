import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscriptionActions } from '../../store/inscription.actions';
import {
  selectCourseOptions,
  selectStudentOptions,
} from '../../store/inscription.selectors';
import { Student } from '../../../students/models';
import { Course } from '../../../courses/models';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inscription-dialog',
  standalone: true,
  imports: [SharedModule, CommonModule, MatSelectModule],
  templateUrl: './inscription-dialog.component.html',
  styleUrl: './inscription-dialog.component.scss',
})
export class InscriptionDialogComponent {
  courseIdControl = new FormControl<number | null>(null, Validators.required);
  studentIdControl = new FormControl<number | null>(null, Validators.required);

  inscriptionForm = new FormGroup({
    courseId: this.courseIdControl,
    studentId: this.studentIdControl,
  });

  courseOptions$: Observable<Course[]>;
  studentOptions$: Observable<Student[]>;

  constructor(
    private store: Store,
    private action$: Actions,
    private matDialogRef: MatDialogRef<InscriptionDialogComponent>
  ) {
    this.store.dispatch(InscriptionActions.loadInscriptionsDialogOptions());
    this.courseOptions$ = this.store.select(selectCourseOptions);
    this.studentOptions$ = this.store.select(selectStudentOptions);
    this.action$
      .pipe(ofType(InscriptionActions.loadInscriptions), take(1))
      .subscribe({
        next: () => this.matDialogRef.close(),
      });
  }

  onSubmit(): void {
    if (this.inscriptionForm.invalid) {
      this.inscriptionForm.markAllAsTouched();
    } else {
      this.store.dispatch(
        InscriptionActions.createInscription({
          payload: this.inscriptionForm.getRawValue(),
        })
      );
    }
  }
}
