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
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-inscription-dialog',
  standalone: true,
  imports: [SharedModule, CommonModule, MatSelectModule],
  templateUrl: './inscription-dialog.component.html',
  styleUrl: './inscription-dialog.component.scss',
})
export class InscriptionDialogComponent {
  courseOptions$: Observable<Course[]>;
  studentOptions$: Observable<Student[]>;

  constructor(private store: Store) {
    this.store.dispatch(InscriptionActions.loadInscriptionsDialogOptions());
    this.courseOptions$ = this.store.select(selectCourseOptions);
    this.studentOptions$ = this.store.select(selectStudentOptions);
  }
}
