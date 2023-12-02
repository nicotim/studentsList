import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscriptions } from '../models';
import { Course } from '../../courses/models';
import { Student } from '../../students/models';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Inscriptions[] }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
    'Load Inscriptions Dialog Options': emptyProps(),
    'Load Inscriptions Dialog Options Success': props<{
      courses: Course[];
      students: Student[];
    }>(),
    'Load Inscriptions Dialog Options Failure': props<{ error: unknown }>(),
  },
});
