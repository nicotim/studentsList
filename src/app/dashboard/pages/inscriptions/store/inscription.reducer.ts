import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { Inscriptions } from '../models';

export const inscriptionFeatureKey = 'inscription';

export interface State {
  isLoading: boolean;
  inscriptions: Inscriptions[];
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  inscriptions: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscriptionActions.loadInscriptions, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(InscriptionActions.loadInscriptionsSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    inscriptions: data,
  })),
  on(InscriptionActions.loadInscriptionsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});
