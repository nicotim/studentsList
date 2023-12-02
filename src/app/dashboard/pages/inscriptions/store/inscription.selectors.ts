import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscription from './inscription.reducer';
import { state } from '@angular/animations';

export const selectInscriptionState =
  createFeatureSelector<fromInscription.State>(
    fromInscription.inscriptionFeatureKey
  );

export const selectInscriptions = createSelector(
  selectInscriptionState,
  (state) => state.inscriptions
);

export const selectCourseOptions = createSelector(
  selectInscriptionState,
  (state) => state.courseOptions
);

export const selectStudentOptions = createSelector(
  selectInscriptionState,
  (state) => state.studentOptions
);
