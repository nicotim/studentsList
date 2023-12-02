import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { Inscriptions } from '../models';
import { Course } from '../../courses/models';
import { Student } from '../../students/models';

export const inscriptionFeatureKey = 'inscription';

export interface State {
  isLoading: boolean;
  isLoadingDialogOptions: boolean;
  courseOptions: Course[];
  studentOptions: Student[];
  inscriptions: Inscriptions[];
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingDialogOptions: false,
  courseOptions: [],
  studentOptions: [],
  inscriptions: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  // loadInscriptions
  on(InscriptionActions.loadInscriptions, (state) => ({
    ...state,
    isLoading: true,
  })),
  // loadInscriptionsSuccess
  on(InscriptionActions.loadInscriptionsSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    inscriptions: data,
  })),
  // loadInscriptionsFailure
  on(InscriptionActions.loadInscriptionsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  // loadInscriptionsDialogOptions
  on(InscriptionActions.loadInscriptionsDialogOptions, (state) => ({
    ...state,
    isLoadingDialogOptions: true,
  })),
  // loadInscriptionsDialogOptionsSuccess
  on(
    InscriptionActions.loadInscriptionsDialogOptionsSuccess,
    (state, action) => ({
      ...state,
      isLoadingDialogOptions: false,
      courseOptions: action.courses,
      studentOptions: action.students,
    })
  ),
  // loadInscriptionsDialogOptionsFailure
  on(
    InscriptionActions.loadInscriptionsDialogOptionsFailure,
    (state, action) => ({
      ...state,
      error: action.error,
      isLoadingDialogOptions: false,
    })
  )
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});
