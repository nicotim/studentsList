import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscriptions } from '../models';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Inscriptions[] }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
  },
});
