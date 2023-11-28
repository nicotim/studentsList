import { ActionReducerMap } from '@ngrx/store';
import {
  State,
  authFeatureKey,
  reducer as authReducer,
} from './auth/auth.reducer';

export interface appState {
  [authFeatureKey]: State;
}

export const appReducer: ActionReducerMap<appState> = {
  [authFeatureKey]: authReducer,
};
